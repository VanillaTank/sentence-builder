import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards-service.service';

@Component({
  selector: 'app-cards-part',
  templateUrl: './cards-part.component.html',
  styleUrls: ['./cards-part.component.css']
})
export class CardsPartComponent implements OnInit {

  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {}

}
