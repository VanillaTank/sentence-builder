import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CardsService } from '../cards-service.service';
import { debounceTime, Subject, takeUntil } from "rxjs";
import {Card} from '../card'

@Component({
  selector: 'app-cards-part',
  templateUrl: './cards-part.component.html',
  styleUrls: ['./cards-part.component.css']
})
export class CardsPartComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  //@ts-ignore
  selectedCards: Card[] | [] | undefined

  constructor(private cardsService: CardsService,
              public readonly cdr: ChangeDetectorRef) {
    this.cardsService.filter
      .pipe(
        debounceTime(100),
        takeUntil(this.destroy$)
      )
      .subscribe((v) => {
        this.selectedCards = v.selectedCards;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  sortingTypeForTitle(a: any, b: any) {
    return a.key > b.key ? -1 : 1;
  }



  getMidOfArr(arr: any[]): number {
    if (arr.length === 1) return 1
    if (arr.length % 2 === 0) return arr.length / 2
    return Math.ceil(arr.length / 2)
  }

}
