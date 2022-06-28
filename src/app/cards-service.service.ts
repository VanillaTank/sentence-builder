import { Injectable } from '@angular/core';
import { Card } from './card';
import { PRESENT_SIMPLE } from './cards-data/PRESENT_SIMPLE';
import { PAST_SIMPLE } from './cards-data/PAST_SIMPLE';
import { PRESENT_CONTINUOUS } from './cards-data/PRESENT_CONTINIOUS';
import { FUTURE_SIMPLE } from './cards-data/FUTURE_SIMPLE';
import { PAST_CONTINUOUS } from './cards-data/PAST_CONTINUOUS'
import { CONDITIONAL_CARDS } from './cards-data/CONDITION';
import { GeneralSearchValues, ConditionSearchValues, FilterListNames } from './filters/interfaces'
import { BehaviorSubject } from "rxjs";
import { scan } from 'rxjs/operators';


interface MainFilter {
  activeFilterName: string;
  activeCards: Card[];
  selectedCards:  Card[] | [] ;
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  // ADD NEW CARD DATA HERE
  GENERAL_CARDS: Card[] = [
    ...PRESENT_SIMPLE, ...PAST_SIMPLE, ...FUTURE_SIMPLE,
    ...PRESENT_CONTINUOUS, ...PAST_CONTINUOUS
  ];
  CONDITIONAL_CARDS: Card[] = CONDITIONAL_CARDS;

  filterListNames = FilterListNames;

  initFilter: MainFilter = {
    activeFilterName: FilterListNames.general,
    activeCards: this.GENERAL_CARDS,
    selectedCards: this.GENERAL_CARDS
  }

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
    switch (chosenFilter) {
      case this.filterListNames.general:
        this.filter.next({
          activeFilterName: chosenFilter,
          activeCards: this.GENERAL_CARDS,
          selectedCards: this.GENERAL_CARDS
        })
        break;

      case this.filterListNames.conditional:
        this.filter.next({
          activeFilterName: chosenFilter,
          activeCards: this.CONDITIONAL_CARDS,
          selectedCards: this.CONDITIONAL_CARDS
        })
        break;
      //ADD NEW FILTER DATA HERE
      default:
        console.log('Был отправлен неверный chosenFilter в метод updateActiveFilter()');
        break;
    }
    this.example = this.filter.pipe(
      scan((acc, curr) => Object.assign({}, acc, curr), {})
    );
  }

  updateSelectedCards(query: GeneralSearchValues | ConditionSearchValues): void {
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
