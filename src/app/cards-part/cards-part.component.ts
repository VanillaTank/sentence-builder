import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards-service.service';

@Component({
  selector: 'app-cards-part',
  templateUrl: './cards-part.component.html',
  styleUrls: ['./cards-part.component.css']
})
export class CardsPartComponent implements OnInit {

  constructor(public cardsService: CardsService) { }

  ngOnInit(): void { }

  sortingTypeForTitle(a: any, b: any) {
    return a.key > b.key ? -1 : 1;
  }

  getMidOfArr(arr: any[]): number {
    if(arr.length === 1) return 1
    if(arr.length % 2 === 0) return arr.length/2
    return Math.ceil(arr.length/2)
  }

}
