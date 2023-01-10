import { Component, ChangeDetectorRef } from '@angular/core';
import { CardFilterService } from '../card-filter.service'
import { Card } from '../cardInterfaces';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent {

    Cards: Card[] = [];

    constructor(
        private cardFilterService: CardFilterService,
        public readonly cdr: ChangeDetectorRef) {
        this.cardFilterService.filtedCard.subscribe((cards: Card[]) => {
            this.Cards = cards;
        });
    }

}
