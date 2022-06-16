import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards-service.service';
import { SearchItem, GeneralSearchValues } from './interfaces';
import { GENERAL_SEARCH_ITEMS } from './SEARCH_ITEMS'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent implements OnInit {

  // General
  voices: SearchItem[] = GENERAL_SEARCH_ITEMS.voices;
  times: SearchItem[] = GENERAL_SEARCH_ITEMS.times;
  typeTimes: SearchItem[] = GENERAL_SEARCH_ITEMS.typeTimes;
  pronouns: SearchItem[] = GENERAL_SEARCH_ITEMS.pronoun;
  verbs: SearchItem[] = GENERAL_SEARCH_ITEMS.verb;
  sentenceTypes: SearchItem[] = GENERAL_SEARCH_ITEMS.sentenceType;

  generalSearchValues: GeneralSearchValues = { 
    voice: [],
    time: [],
    timeType: [],
    pronoun: [],
    verb: [],
    sentenceType: []
  };

  constructor(private cardsService: CardsService) { }

  ngOnInit() {}

  changeCheckbox(list: SearchItem[], title: string):void {
    list
      .map((el: SearchItem)  => {
        if(el.checked && !this.generalSearchValues[title].includes(el.value)) {
          this.generalSearchValues[title].push(el.value);
        } else if (!el.checked && this.generalSearchValues[title].includes(el.value)) {
          const i = this.generalSearchValues[title].indexOf(el.value);
          this.generalSearchValues[title].splice(i, 1);
        }
      });
    this.cardsService.updateSelectedCards(this.generalSearchValues);
  }
}