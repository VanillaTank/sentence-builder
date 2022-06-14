import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent implements OnInit {
  voices: any[] = [];
  times: any[] = [];
  typeTimes: any[] = [];

  searchValues: any = { 
    voice: [],
    time: [],
    timeType: []};

  constructor(public cardsService: CardsService) { }

  ngOnInit() {
    this.voices = [
      { value: 'active', checked: false },
      { value: 'passive', checked: false }]


    this.times = [
      { value: 'past', checked: false },
      { value: 'present', checked: false },
      { value: 'future', checked: false }]


    this.typeTimes = [
      { value: 'simple', checked: false },
      { value: 'continious', checked: false },
      { value: 'perfect', checked: false },
      { value: 'perfect continious', checked: false }]
  }

  changeCheckbox(list: any[], title: string) {
    list
      .map(el => {
        
        if(el.checked && !this.searchValues[title].includes(el.value)) {
          this.searchValues[title].push(el.value);
        } else if (!el.checked && this.searchValues[title].includes(el.value)) {
          const i = this.searchValues[title].indexOf(el.value);
          this.searchValues[title].splice(i, 1);
        }
      });
    this.cardsService.updateSelectedCards(this.searchValues);
  }
}