import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

// Cards
import { Card, Example } from './cardInterfaces';
import { PAST_SIMPLE } from './data/cards/PAST_SIMPLE';
// import { PRESENT_SIMPLE } from './cards-data/PRESENT_SIMPLE';
import { PRESENT_CONTINUOUS } from './data/cards/PRESENT_CONTINIOUS';
// import { FUTURE_SIMPLE } from './cards-data/FUTURE_SIMPLE';
// import { PAST_CONTINUOUS } from './cards-data/PAST_CONTINUOUS';
// import { PRESENT_PERFECT } from './cards-data/PRESENT_PERFECT'
import { CONDITIONAL_CARDS } from './data/cards/CONDITION';
// import { PAST_PERFECT } from './cards-data/PAST_PERFECT'
// import { FUTURE_CONTINUOUS } from './cards-data/FUTURE_CONTINUOUS'

// Filters
import { Filter } from './filters/filters';
import { mainFilter } from './data/filters/main'
import { generalFilter } from './data/filters/general'
import { conditionalFilter } from './data/filters/conditional'

@Injectable({
    providedIn: 'root'
})


export class CardFilterService {

    CARDS = [
        {
            mainFilter: "general",
            cards: [
                // ...PRESENT_SIMPLE,
                PAST_SIMPLE,
                // ...FUTURE_SIMPLE,
                PRESENT_CONTINUOUS,
                // ...PAST_CONTINUOUS, ...FUTURE_CONTINUOUS,
                // ...PRESENT_PERFECT, ...PAST_PERFECT
            ]
        },
        {
            mainFilter: "conditional",
            cards: [...CONDITIONAL_CARDS]
        }
    ]

    mainFilterCard: any = this.CARDS.find(o => o.mainFilter === 'general');

    filtedCard = new BehaviorSubject<Card>(this.mainFilterCard.cards);
    currentFilters = new BehaviorSubject<Filter[]>([mainFilter, ...generalFilter]);

    // filteredExamples = (): Example[] | [] => {
    //     const result: Example[] | [] = [];
    //     for (let i = 0; i < 5; i++) {
    //         this.mainFilterCard?.cards.map((c: Card) => {
    //             //@ts-ignore
    //             const randomIndex = Math.floor(Math.random() * this.mainFilterCard.cards.length);
    //             //@ts-ignore
    //             result.push(c.examples[randomIndex]);
    //         })
    //     }
    //     return result;
    // }

    constructor() { }

    onMainFilterChange(value: string): void {
        this.mainFilterCard = this.CARDS.find(o => o.mainFilter === value);
        this.filtedCard.next(this.mainFilterCard?.cards);
        if (value === 'general') { this.currentFilters.next([mainFilter, ...generalFilter]); return };
        if (value === 'conditional') { this.currentFilters.next([mainFilter, ...conditionalFilter]); return };

    }

    // onCardFilterChenge(value: { title: string, value: string }) {
    //     const filtedCard = this.mainFilterCard?.cards
    //         .map((c: Card) => c.cardFilter.filter(cardFilter => {
    //             cardFilter.title === value.title && cardFilter.value === value.value
    //         }));
    //     this.filtedCard.next(filtedCard);
    // }

    // onExampleFilterChange(value: { title: string, value: string }[]) {
    //     // this.filtedCard.map(c => {
    //     //     c.examples = c.examples.filter(e => {
    //     //         e.exampleFilter.map(exampleFilter => {
    //     //             if (exampleFilter.title === value.title && exampleFilter.value === value.value) {
    //     //                 return true
    //     //             }
    //     //             return false
    //     //         })
    //     //     })
    //     // })
    //     // this.filterdExamples = () => {
    //     //     const result: Example[] | [] = [];
    //     //     this.mainFilterCard?.cards.map((c: Card) => {
    //     //         c.examples.map((e) => {
    //     //             e.exampleFilter.map(exampleFilter => {
    //     //                 if (exampleFilter.title === value.title && exampleFilter.value === value.value) {
    //     //                     //@ts-ignore
    //     //                     result.push(e);
    //     //                 }
    //     //             })
    //     //         })
    //     //     })
    //     //     return result;
    //     // }
    // }
}
