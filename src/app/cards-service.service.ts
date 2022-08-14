import { Injectable } from '@angular/core';
import { Card } from './card';
import { PRESENT_SIMPLE } from './cards-data/PRESENT_SIMPLE';
import { PAST_SIMPLE } from './cards-data/PAST_SIMPLE';
import { PRESENT_CONTINUOUS } from './cards-data/PRESENT_CONTINIOUS';
import { FUTURE_SIMPLE } from './cards-data/FUTURE_SIMPLE';
import { PAST_CONTINUOUS } from './cards-data/PAST_CONTINUOUS';
import {PRESENT_PERFECT} from './cards-data/PRESENT_PERFECT'
import { CONDITIONAL_CARDS } from './cards-data/CONDITION';
import { GeneralSearchValues, ConditionSearchValues, FilterListNames } from './filters/interfaces'
import { BehaviorSubject } from "rxjs";
import { scan } from 'rxjs/operators';
import {CONDITION_SEARCH_ITEMS, GENERAL_SEARCH_ITEMS} from './filters-data/SEARCH_ITEMS'
import {PAST_PERFECT} from './cards-data/PAST_PERFECT'
import {FUTURE_CONTINUOUS} from './cards-data/FUTURE_CONTINUOUS'

interface MainFilter {
  activeFilterName: string;
  activeCards: Card[];
  selectedCards: Card[] | [] | void;
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  // ADD NEW CARD DATA HERE
  GENERAL_CARDS: Card[] = [
    ...PRESENT_SIMPLE, ...PAST_SIMPLE, ...FUTURE_SIMPLE,
    ...PRESENT_CONTINUOUS, ...PAST_CONTINUOUS, ...FUTURE_CONTINUOUS,
    ...PRESENT_PERFECT, ...PAST_PERFECT
  ];
  CONDITIONAL_CARDS: Card[] = CONDITIONAL_CARDS;

  filterListNames = FilterListNames;

  initFilter: MainFilter = {
    activeFilterName: FilterListNames.general,
    activeCards: this.GENERAL_CARDS,
    selectedCards: this.GENERAL_CARDS
  }
  query: GeneralSearchValues | ConditionSearchValues | undefined;
  prevFilter: string = FilterListNames.general;
  filter = new BehaviorSubject<MainFilter>(this.initFilter);
  savedFilterValue: any;
  example: any = this.filter.pipe(
    scan((acc, curr) => Object.assign({}, acc, curr), {})
  ).subscribe((val: any) => this.savedFilterValue = val);

  constructor() {
  }

  getDefaultFilter() {
    this.savedFilterValue.selectedCards = this.savedFilterValue.activeCards;
    this.filter.next(this.savedFilterValue);
  }

  updateActiveFilter(chosenFilter: string): void {

    if (this.query) {
      this.saveToLocalStorage(this.prevFilter, this.query);
      this.query = undefined;
    }

    switch (chosenFilter) {
      case this.filterListNames.general:
        this.filter.next({
          activeFilterName: chosenFilter,
          activeCards: this.GENERAL_CARDS,
          selectedCards: this.GENERAL_CARDS
        })
        this.prevFilter = this.filterListNames.general;
        break;


      case this.filterListNames.conditional:
        this.filter.next({
          activeFilterName: chosenFilter,
          activeCards: this.CONDITIONAL_CARDS,
          selectedCards: this.CONDITIONAL_CARDS
        })
        this.prevFilter = this.filterListNames.conditional;
        break;
      //ADD NEW FILTER DATA HERE


      default:
        console.log('Был отправлен неверный chosenFilter в метод updateActiveFilter()');
        break;
    }

    this.example = this.filter.pipe(
      scan((acc, curr) => Object.assign({}, acc, curr), {})
    );

    if (this.getLocalStorage(chosenFilter)) {
      //@ts-ignore
      this.updateSelectedCards(JSON.parse(this.getLocalStorage(chosenFilter)))
    } else {
      let actviveFilterItem; 
      if(chosenFilter === this.filterListNames.general) {
        actviveFilterItem = GENERAL_SEARCH_ITEMS;
      } else if(chosenFilter === this.filterListNames.conditional) {
        actviveFilterItem = CONDITION_SEARCH_ITEMS;
      }

      actviveFilterItem?.map(item => {
        item.values.map(it => it.checked = false)
      })
    }
  }

  getLocalStorage(filterType: string): boolean | string | null {
    if (!localStorage.getItem(`sentence-builder: ${filterType}`)) { return false }
    return localStorage.getItem(`sentence-builder: ${filterType}`)
  }

  saveToLocalStorage(filterType: string, data: any): void {
    localStorage.setItem(`sentence-builder: ${filterType}`, JSON.stringify(data));
  }

  clearStorage(activeFilterName:string | undefined = undefined):void {
    this.query = undefined;
    if(activeFilterName) {
      console.log(activeFilterName);
      
      localStorage.removeItem(`sentence-builder: ${activeFilterName}`);
      return;
    }

    for(let f in this.filterListNames) {
      // @ts-ignorets
      localStorage.removeItem(`sentence-builder: ${this.filterListNames[f]}`);
    }
  }

  updateSelectedCards(query: GeneralSearchValues | ConditionSearchValues): void {
    this.query = query; 
    this.savedFilterValue.selectedCards = this.savedFilterValue.activeCards?.filter((card: Card) => {
      for (let q in query) {
        if (query[q].length > 0 && !query[q].includes(card.type[q])) {
          return false
        }
      }
      return true;
    })
    this.filter.next(this.savedFilterValue)
  }


}
