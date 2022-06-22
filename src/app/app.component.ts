import { Component } from '@angular/core';
import { CardsService } from './cards-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'some-project';
  filterList: string[] = ['Generals', 'Condinions', 
  //'Questions', 'Would', 'Побудительные'
];

  activeFilter: string = this.filterList[0];

  constructor(private cardsService: CardsService) {}

  onFilterListItemClick(chosenFilter:string) {
    this.activeFilter = chosenFilter;
    this.cardsService.updateActiveFilter(chosenFilter)
  }
  
}
