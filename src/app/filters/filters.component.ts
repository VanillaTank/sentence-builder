import { Component } from '@angular/core';
import { Filter } from './filters';
import { CardFilterService } from '../card-filter.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
    Filters:Filter[] | [] = [];
    constructor(private cardFilterService: CardFilterService) { 
        this.cardFilterService.currentFilters.subscribe((filters:any) => this.Filters = filters);
    }

    onClickBtnFilter(c: any, id: any, v:any=undefined): void {
        if (id === 'mainFilter') {
            this.cardFilterService.onMainFilterChange(c.value);
        }
        else if (id === "cardFilter") {
            // @ts-ignore
            v.checked = !v?.checked;
            //this.cardFilterService.onCardFilterChenge()
        }
        else if (id === "exampleFilter") {
            // @ts-ignore
            v.checked = !v.checked
            // this.cardFilterService.onExampleFilterChange();
        }

        this.Filters.map((f: any) => {
            if (f.type === 'btn-filter') {
                f.content.forEach((c: any) => c.checked = false);
            }
            return;
        })
        c.checked = !c.checked;
    }

    onTitleRowClick(c: any): void {
        c.shown = !c.shown;
    }


}
