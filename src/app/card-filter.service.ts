import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

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

    mainFilterCards: any = this.CARDS.find(o => o.mainFilter === 'general');

    filtedCard = new BehaviorSubject<Card[]>(this.mainFilterCards.cards);
    currentFilters = new BehaviorSubject<Filter[]>([...this.FILTERS.main, ...this.FILTERS.general]);

    initCards() {
        this.mainFilterCards = this.CARDS.find(o => o.mainFilter === 'general');
        this.filtedCard.next(this.mainFilterCards?.cards);
    }

    onMainFilterChange(value: string): void { 
        this.mainFilterCards = this.CARDS.find(o => o.mainFilter === value);
        this.filtedCard.next(this.mainFilterCards?.cards);

        const newFilter: Filter | Filter[] = this.FILTERS[value as keyof MyFilters];
        this.currentFilters.next([...this.FILTERS.main, ...newFilter]);
    }

    // randomFilterExamples(): void {

    //     this.mainFilterCards?.cards.map((c: Card) => {
    //         c.examples.map((e: Example) => e.shown = false);
    //         const arrRandIndexes: number[] = [];
    //         const exampleLength = c.examples.length
    //         for (let i = 0; i < 5 && i <= exampleLength; i++) {
    //             let randomIndex: number | never = Math.floor(Math.random() * exampleLength);
    //             while (arrRandIndexes.includes(randomIndex) && arrRandIndexes.length < exampleLength) {
    //                 randomIndex = Math.floor(Math.random() * exampleLength);
    //             }
    //             arrRandIndexes.push(randomIndex)
    //             c.examples[randomIndex].shown = true;
    //         }
    //     })

    // }

    onCardFilterChange(query: any) {

        const aa = this.mainFilterCards?.cards.filter((card: Card) => {
            for (let q in query) {
                if (query[q].length > 0 && !query[q].includes(card.cardFilter[q])) {
                    return false
                }
            }
            return true;
        })
        this.filtedCard.next(aa)
    }


    onExampleFilterChange(query: any) {
        this.mainFilterCards?.cards.forEach((card: Card) => {
            card.examples = card.examples.filter((e: Example) => {
                for (let q in query) {
                    if (query[q].length > 0 && !query[q].includes(e.exampleFilter[q])) {
                        return false
                    }
                }
                return true;
            })
        })

        this.filtedCard.next(this.mainFilterCards?.cards);
    }
}
