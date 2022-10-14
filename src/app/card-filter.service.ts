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
        this.CARDS.map(c => c.cards.map(card => {
            card.shown = true;
            card.examples.map(e => e.shown = false)
        }));
        this.mainFilterCards = this.CARDS.find(o => o.mainFilter === 'general');
        this.randomFilterExamples();
        this.filtedCard.next(this.mainFilterCards?.cards);
    }

    onMainFilterChange(value: string): void {
        this.mainFilterCards = this.CARDS.find(o => o.mainFilter === value);
        this.randomFilterExamples();
        this.filtedCard.next(this.mainFilterCards?.cards);

        const newFilter: Filter | Filter[] = this.FILTERS[value as keyof MyFilters];
        this.currentFilters.next([...this.FILTERS.main, ...newFilter]);
    }

    randomFilterExamples(): void {
        this.mainFilterCards?.cards.map((c: Card) => {
            c.examples.map((e: Example) => e.shown = false);
            const arrRandIndexes: number[] = [];
            const exampleLength = c.examples.length
            for (let i = 0; i < 5 && i <= exampleLength; i++) {
                let randomIndex: number | never = Math.floor(Math.random() * exampleLength);
                while (arrRandIndexes.includes(randomIndex) && arrRandIndexes.length < exampleLength) {
                    randomIndex = Math.floor(Math.random() * exampleLength);
                }
                arrRandIndexes.push(randomIndex)
                c.examples[randomIndex].shown = true;
            }
        })

    }

    onCardFilterChange(state: State[]) {
        this.CARDS.map(c => c.cards.map(card => {
            card.shown = false;
        }));

        const filtedCard: Card[] = [];
        this.mainFilterCards?.cards.map((c: any) => {
            c.cardFilter.map((cf: any) => {
                state.forEach((s: any) => {
                    if (s.title === cf.title && s.values.includes(cf.value)) {
                        if (!filtedCard.some((fc => fc.title === c.title))) {
                            c.shown = true;      
                            filtedCard.push(c);
                        }
                    }
                })
            })
        })
        this.filtedCard.next(this.mainFilterCards?.cards);
    }

    onExampleFilterChange(state: State[]) {
        this.CARDS.map(c => c.cards.map(card => {
            card.examples.map(e => e.shown = false)
        }));
        this.mainFilterCards?.cards.map((c: any) => {
            c.examples.map((e: Example) => {
                e.exampleFilter.map((ef: any) => {
                    state.forEach(s => {
                        if (s.title === ef.title && s.values.includes(ef.value)) {
                            e.shown = true;
                        }
                    })
                })
            })
        }); 

        this.filtedCard.next(this.mainFilterCards?.cards);
    }
}
