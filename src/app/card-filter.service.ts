import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

// Cards
import { Card, Example } from './cardInterfaces';
import { CARDS } from './data/cards'

// Filters
import { Filter } from './filters/filters';
import { FILTERS } from './data/filters'
import { MyFilters } from './data/filters'

interface CardsArray {
    mainFilter: string;
    cards: Card[]
}

interface State {
    title: string;
    values: string[];
}

@Injectable({
    providedIn: 'root'
})

export class CardFilterService {

    CARDS: CardsArray[] = [...JSON.parse(JSON.stringify(CARDS))];
    FILTERS = FILTERS;

    mainFilterCurrentValue: string = 'general';
    mainFilterCards: any = JSON.parse(JSON.stringify(this.CARDS.find(o => o.mainFilter === this.mainFilterCurrentValue)));

    filtedCard = new Subject<Card[]>();
    currentFilters = new BehaviorSubject<Filter[]>([...this.FILTERS.main, ...this.FILTERS.general]);

    initCards() {
        this.CARDS.forEach(category => {
            category.cards.forEach((c: Card) => {
                c.shown = true;
                c.examples.forEach((e: Example) => e.show = false);
            })
        })
    }

    onMainFilterChange(value: string): void {
        this.mainFilterCards = this.CARDS.find(category => category.mainFilter === value);
        this.mainFilterCurrentValue = value;
        this.filtedCard.next(this.mainFilterCards?.cards);

        const newFilter: Filter | Filter[] = this.FILTERS[value as keyof MyFilters];
        this.currentFilters.next([...this.FILTERS.main, ...newFilter]);
    }

    onCardFilterChange(query: any): void {
        if (Object.keys(query).length === 0) {
            this.mainFilterCards.cards.forEach((c: Card) => c.shown = true);
            this.filtedCard.next(this.mainFilterCards?.cards);
            return;
        }


        this.mainFilterCards?.cards.forEach((card: Card) => {
            for (let q in query) {
                if (query[q].length > 0 && !query[q].includes(card.cardFilter[q])) {
                    card.shown = false;
                    return;
                }
            }
            card.shown = true;
            return card;
        })

        this.filtedCard.next(this.mainFilterCards?.cards);
    }


    onExampleFilterChange(query: any): void {

        if (Object.keys(query).length === 0) {
            this.mainFilterCards.cards.forEach((c: Card) => {
                c.examples.forEach((e: Example) => e.show = true)
            });
            this.filtedCard.next(this.mainFilterCards?.cards);
            return;
        }


        this.mainFilterCards?.cards.forEach((card: Card) => {
            card.examples.forEach((e: Example) => {
                for (let q in query) {
                    if (query[q].length > 0 && !query[q].includes(e.exampleFilter[q])) {
                        e.show = false;
                        return;
                    }
                }
                e.show = true;
            })
            return card;
        })

        this.filtedCard.next(this.mainFilterCards?.cards);
    }
}
