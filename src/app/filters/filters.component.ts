import { Component } from '@angular/core';
import { Filter } from './filters';
import { CardFilterService } from '../card-filter.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
    Filters: Filter[] | [] = [];

    state: any = {
        cardFilter: [],
        exampleFilter: []
    }

    constructor(private cardFilterService: CardFilterService) {
        this.cardFilterService.currentFilters.subscribe((filters: any) => this.Filters = filters);
    }

    onClickBtnFilter(c: any, id: any, v: any = undefined): void {
        if (id === 'mainFilter') {
            this.cardFilterService.onMainFilterChange(c.value);
        }
        else if (id === "cardFilter") {
            v.checked = !v.checked;
            this.state.cardFilter = this.state.cardFilter.filter((s: any) => s.title !== c.id);

            this.state.cardFilter.push(
                {
                    title: c.id,
                    values: c.values
                        .map((v: any): any => {
                            if (v.checked) { return v.value }
                        })
                        .filter((v: any) => v !== undefined)
                })

            this.cardFilterService.onCardFilterChange(this.state.cardFilter)
        }
        else if (id === "exampleFilter") {
            v.checked = !v.checked;
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


    /**
     * Show/Hide selector options
     * @param c - filter.content, the very filter info
     */
    onTitleRowClick(c: any): void {
        c.shown = !c.shown;
    }


}
