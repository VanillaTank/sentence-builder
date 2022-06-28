import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { CardsService } from '../cards-service.service';
import { ConditionSearchValues, GeneralSearchValues, SearchItem, SearchItemValues, FilterListNames } from './interfaces';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { GENERAL_SEARCH_ITEMS, CONDITION_SEARCH_ITEMS } from '../filters-data/SEARCH_ITEMS'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

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
  filterListNames = FilterListNames;

  //@ts-ignore
  activeFilterName: string | undefined;

  constructor(public cardsService: CardsService,
              public readonly cdr: ChangeDetectorRef) {
    this.cardsService.filter
      .pipe(
        debounceTime(100),
        takeUntil(this.destroy$)
      )
      .subscribe((v) => {
        this.activeFilterName = v.activeFilterName;  //Определяем название фильтра
        this.changeActiveSearchValue(v.activeFilterName);  //Определяем дефолтный вид поисковой строки
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeActiveSearchValue(currentFilter: string | undefined): void {
    switch (currentFilter) {
      case this.filterListNames.general:
        this.activeSearchValue = this.generalSearchValues; break;
      case this.filterListNames.conditional:
        this.activeSearchValue = this.conditionSearchValues; break;
      default: break;
    }
  }

  onClearBtnClick(activeFilterItem: SearchItem[], activeFilterName:string | undefined): void {
    activeFilterItem.map(item => {
      item.values.map(it => it.checked = false)
    })
    this.cardsService.getDefaultFilter();
    this.changeActiveSearchValue(activeFilterName)

  }

  getActiveFilterItem(): SearchItem[] {
    switch (this.activeFilterName) {
      case this.filterListNames.general:
        return GENERAL_SEARCH_ITEMS;
      case this.filterListNames.conditional:
        return CONDITION_SEARCH_ITEMS;
      // ADD HERE PATH TO DATA FOR CREATING CHECKBOXES
      default:
        return GENERAL_SEARCH_ITEMS;
    }
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

