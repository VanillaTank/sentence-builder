import { Injectable } from '@angular/core';
import { Card, ConditionCard } from './card';
import { PRESENT_SIMPLE } from './cards-data/PRESENT_SIMPLE';
import { PAST_SIMPLE } from './cards-data/PAST_SIMPLE';
import { PRESENT_CONTINUOUS } from './cards-data/PRESENT_CONTINIOUS';
import { FUTURE_SIMPLE } from './cards-data/FUTURE_SIMPLE';
import { PAST_CONTINUOUS } from './cards-data/PAST_CONTINUOUS'
import { CONDITIONAL_CARDS } from './cards-data/CONDITION';
import { GeneralSearchValues, ConditionSearchValues, SearchItem } from './filters/interfaces'
import { GENERAL_SEARCH_ITEMS, CONDITION_SEARCH_ITEMS } from './filters-data/SEARCH_ITEMS'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  // ADD NEW CARD DATA HERE
  GENERAL_CARDS: Card[] = [
    ...PRESENT_SIMPLE, ...PAST_SIMPLE, ...FUTURE_SIMPLE,
    ...PRESENT_CONTINUOUS, ...PAST_CONTINUOUS
  ];
  CONDITIONAL_CARDS: ConditionCard[] = CONDITIONAL_CARDS;

  activeCards: any[] = this.GENERAL_CARDS;

  //@ts-ignore   //INITIAL VALUES
  selectedCards: Card[] | [] = this.activeCards;
  activeFilterName: string = "Generals";

  constructor() {
  }

  updateActiveFilter(choosenFilter: string): void {
    this.activeFilterName = choosenFilter;
    switch (this.activeFilterName) {
      case 'Generals':
        this.activeCards = this.GENERAL_CARDS;
        break;
      case 'Conditional':
        this.activeCards = this.CONDITIONAL_CARDS;
        break;
      //ADD NEW FILTER DATA HERE
      default:
        this.activeCards = this.GENERAL_CARDS;
    }
    this.actviveFilterItem().map(item => {
      item.values.map(it => it.checked = false)
    })
    this.selectedCards = this.activeCards;
  }

  getAllCards(): void {
    this.selectedCards = this.activeCards;
  }

  getActiveFilterName(): string {
    return this.activeFilterName;
  }

  actviveFilterItem(): SearchItem[] {
    switch (this.activeFilterName) {
      case 'Generals':
        return GENERAL_SEARCH_ITEMS;
      case 'Conditional':
        return CONDITION_SEARCH_ITEMS;
      //TODO дописать сюда путь к элементам фильтра, когда будут данные
      default:
        return GENERAL_SEARCH_ITEMS;
    }
  }

  updateSelectedCards(query: GeneralSearchValues | ConditionSearchValues): void {
    this.selectedCards = this.activeCards.filter(card => {
      for (let q in query) {
        if (query[q].length > 0 && !query[q].includes(card.type[q])) {
          return false
        }
      }
      return true;
    })
  }

}
