import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { CardsService } from '../cards-service.service';
import { SearchItem, ConditionSearchValues, GeneralSearchValues, SearchItemValues } from './interfaces';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent implements OnInit {
  //@ts-ignore
  @Input() activeFilterName: string;

  generalSearchValues: GeneralSearchValues = {
    voice: [],
    time: [],
    timeType: [],
    pronoun: [],
    verb: [],
    sentenceType: []
  };

  conditionSearchValues: ConditionSearchValues = {
    ifClauseTime: [],
    ifClauseSentenceType: [],
    ifClausePronoun: [],
    mainClauseTime: [],
    mainClauseSentenceType: [],
    mainClausePronoun: []
  };

  //ADD NEW KIND OF SEARCH VALUES HERE (like generalSearchValues)

  activeSearchValue: GeneralSearchValues | ConditionSearchValues = this.generalSearchValues;

  constructor(public cardsService: CardsService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChange):void {
    //@ts-ignore
    this.changeActiveSearchValue(changes.activeFilterName.currentValue)
  }

  changeActiveSearchValue(currentFilter: string):void {
    switch (currentFilter) {
      case 'Generals': this.activeSearchValue = this.generalSearchValues; break;
      case 'Conditional': this.activeSearchValue = this.conditionSearchValues; break;
      default: break;
    }
  }

  onClearBtnClick(actviveFilterItem: SearchItem[]): void {
    actviveFilterItem.map(item => {
      item.values.map(it => it.checked = false)
    })
    this.cardsService.getAllCards();
    this.changeActiveSearchValue(this.cardsService.getActiveFilterName())

  }

  changeCheckbox(list: SearchItemValues[], title: string): void {
    list
      .map((el: SearchItemValues) => {
        if (el.checked && !this.activeSearchValue[title].includes(el.value)) {
          this.activeSearchValue[title].push(el.value);
        } else if (!el.checked && this.activeSearchValue[title].includes(el.value)) {
          const i = this.activeSearchValue[title].indexOf(el.value);
          this.activeSearchValue[title].splice(i, 1);
        }
      });
    this.cardsService.updateSelectedCards(this.activeSearchValue);
  }
}
