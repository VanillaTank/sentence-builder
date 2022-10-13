import { Component } from '@angular/core';
import { CardFilterService } from './card-filter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'English';

    constructor(private cardFilterService: CardFilterService) { 
        this.cardFilterService.initCards();
    }

    showHTU() {
        alert('In progress...')
    }
}
