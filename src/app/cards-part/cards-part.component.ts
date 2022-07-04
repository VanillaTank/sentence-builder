import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CardsService } from '../cards-service.service';
import { debounceTime, Subject, takeUntil } from "rxjs";
import {Card, GeneralCardType, ConditionCardType} from '../card'
import { FilterListNames } from "../filters/interfaces";

@Component({
  selector: 'app-cards-part',
  templateUrl: './cards-part.component.html',
  styleUrls: ['./cards-part.component.css']
})
export class CardsPartComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  //@ts-ignore
  selectedCards: Card[] | [] | undefined | void;
  activeFilterName: string = FilterListNames.general;

  constructor(private cardsService: CardsService,
              public readonly cdr: ChangeDetectorRef) {
    this.cardsService.filter
      .pipe(
        debounceTime(100),
        takeUntil(this.destroy$)
      )
      .subscribe((v) => {
        this.activeFilterName = v.activeFilterName
        this.selectedCards = v.selectedCards;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getCardHeader(cardTypes: GeneralCardType | ConditionCardType):string {
    const cardTypesLocales: any = {};
    for(let t in cardTypes) {
      cardTypesLocales[t] = cardTypes[t][0].toUpperCase() + cardTypes[t].slice(1)
    }

   if(this.activeFilterName === FilterListNames.general) {
     return `${cardTypesLocales.voice} - ${cardTypesLocales.time} - ${cardTypesLocales.timeType} - ${cardTypesLocales.pronoun} - ${cardTypesLocales.verb} - ${cardTypesLocales.sentenceType}`
   }
   if(this.activeFilterName === FilterListNames.conditional) {
     return `${cardTypesLocales.ifClauseTime} - ${cardTypesLocales.ifClauseSentenceType} - ${cardTypesLocales.ifClausePronoun} - ${cardTypesLocales.mainClauseTime} - ${cardTypesLocales.mainClauseSentenceType} - ${cardTypesLocales.mainClausePronoun}`
   }
   // ADD CONDITIONS FOR CREATING CARD HEADERS HERE
   return 'Name wasn\'t found'
  }



  getMidOfArr(arr: any[]): number {
    if (arr.length === 1) return 1
    if (arr.length % 2 === 0) return arr.length / 2
    return Math.ceil(arr.length / 2)
  }

}
