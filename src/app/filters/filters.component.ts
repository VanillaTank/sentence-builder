import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards-service.service';
import { GeneralSearchValues, SearchItemValues } from './interfaces';
import { GENERAL_SEARCH_ITEMS } from '../filters-data/SEARCH_ITEMS'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent implements OnInit {

 
  generals = GENERAL_SEARCH_ITEMS;

  generalSearchValues: GeneralSearchValues = {
    voice: [],
    time: [],
    timeType: [],
    pronoun: [],
    verb: [],
    sentenceType: []
  };

  constructor(public cardsService: CardsService) { }

  ngOnInit() {

  }


  changeCheckbox(list: SearchItemValues[], title: string): void {
    title = title.toLowerCase();
    list
      .map((el: SearchItemValues) => {
        if (el.checked && !this.generalSearchValues[title].includes(el.value)) {
          this.generalSearchValues[title].push(el.value);
        } else if (!el.checked && this.generalSearchValues[title].includes(el.value)) {
          const i = this.generalSearchValues[title].indexOf(el.value);
          this.generalSearchValues[title].splice(i, 1);
        }
      });
    this.cardsService.updateSelectedCards(this.generalSearchValues);
  }
}