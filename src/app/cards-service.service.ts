import { Injectable } from '@angular/core';
import { Card } from './card';
import { PRESENT_SIMPLE } from './cards-data/PRESENT_SIMPLE';
import { GeneralSearchValues } from '../app/filters/interfaces'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: Card[] = [...PRESENT_SIMPLE];
  //@ts-ignore
  selectedCards: Card[] | [] = CARDS;

  constructor() { }

  updateSelectedCards(query: GeneralSearchValues): void {
    this.selectedCards = this.cards.filter(card => {
      if (query.voice.length > 0 && !query.voice.includes(card.type.voice)) {
        return false;
      }
      if (query.time.length > 0 && !query.time.includes(card.type.time)) {
        return false;
      }
      if (query.timeType.length > 0 && !query.timeType.includes(card.type.timeType)) {
        return false;
      }
      if (query.pronoun.length > 0 && !query.pronoun.includes(card.type.pronoun)) {
        return false;
      }
      if (query.verb.length > 0 && !query.verb.includes(card.type.verb)) {
        return false;
      }
      if (query.sentenceType.length > 0 && !query.sentenceType.includes(card.type.sentenceType)) {
        return false;
      }
      return true;
    })
  }
}
