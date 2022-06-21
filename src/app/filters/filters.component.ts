import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards-service.service';
import { SearchItem, GeneralSearchValues, SearchItemValues } from './interfaces';
import { GENERAL_SEARCH_ITEMS } from '../filters-data/SEARCH_ITEMS'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent implements OnInit {
  generals:SearchItem[]  = GENERAL_SEARCH_ITEMS;

  // TODO переписать на динамическое создание когда смогу подписаться на изменение вида фильтра
  actviveFilter:SearchItem[] = this.generals;

  // TODO переписать на динамическое создание когда смогу подписаться на изменение вида фильтра
  generalSearchValues: GeneralSearchValues = {
    voice: [],
    time: [],
    timeType: [],
    pronoun: [],
    verb: [],
    sentenceType: []
  };

  constructor(public cardsService: CardsService) { }

  ngOnInit() {}

  onClearBtnClick():void {
    this.actviveFilter.map(item => {
      item.values.map(it => it.checked = false)
    })
    this.cardsService.getAllCards()
  }

  //TODO написать метод получения всех карточек после очистки чекбоксов

  changeCheckbox(list: SearchItemValues[], title: string): void {
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