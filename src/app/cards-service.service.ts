import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  //@ts-ignore
  selectedCards: Card[] | [] = CARDS;

  constructor() { }

  updateSelectedCards(query: any): void {
    this.selectedCards = CARDS
  }

  // getSelectedCards(query: any): Card[] | [] {

  //   // let aa = CARDS
  //   //   .filter(card => {
  //   //     if(query.voice.includes(card.type.voice)) { return card}
  //   //     return false
  //   //   })
  //   //   .filter(selected => {
  //   //     if(query.time.includes(selected.type.time)) { return selected}
  //   //     return false
  //   //   })
  //   //   // .filter(selected => {
  //   //   //   return selected.type.timeType.split('').some((el) => el.includes(query.timeType))
  //   //   // })

  //   // let aa: any = []
  //   // CARDS.map(card => {
  //   //   if(query.voice) {
  //   //     for(let v of query.voice) {
  //   //       if(card.type.voice === v) {
  //   //         aa.push(card)
  //   //       } else if (card.type.voice !== v && aa.includes())
  //   //     }
  //   //   }

  //   //   if(query.time) {
  //   //     for(let t of query.time) {
  //   //       if(card.type.time === t) {
  //   //         aa.push(card)
  //   //       }
  //   //     }
  //   //   }
  //   // })

  //   // console.log(aa);

  //   // return aa;

  // }
}
