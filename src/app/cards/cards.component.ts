import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CardFilterService } from '../card-filter.service'
import {Card} from '../cardInterfaces';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnDestroy {

    Cards: any = [];

    constructor(
        private cardFilterService: CardFilterService, 
        public readonly cdr: ChangeDetectorRef) { 
           this.cardFilterService.filtedCard.subscribe((cards: any) => {this.Cards = cards});
        }


    ngOnDestroy(): void {
        // this.destroy$.next();
        // this.destroy$.complete();
    }


}
