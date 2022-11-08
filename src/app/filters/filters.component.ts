import { Component, OnInit } from '@angular/core';
import { Filter } from './filters';
import { CardFilterService } from '../card-filter.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
    Filters: Filter[] = [];

    state: any = {
        cardFilter: {},
        exampleFilter: {}
    }

    constructor(private cardFilterService: CardFilterService) {
        this.cardFilterService.currentFilters.subscribe((filters: any) => this.Filters = filters);
    }

    ngOnInit(): void {
        this.createRandomExampleFilter();
        this.cardFilterService.onMainFilterChange('general')
    }

    createRandomExampleFilter() {
        this.state.exampleFilter = {};

        this.Filters.find(f => f.id === "exampleFilter")?.content.map(f => {
            const arrRandIndexes: number[] = [];
            const exampleLength = f.values?.length;

            for (let i = 0; i < 2 && i <= exampleLength; i++) {
                let randomIndex: number | never = Math.floor(Math.random() * exampleLength);
                while (arrRandIndexes.includes(randomIndex) && arrRandIndexes.length < exampleLength) {
                    randomIndex = Math.floor(Math.random() * exampleLength);
                }
                arrRandIndexes.push(randomIndex);
                f.values[randomIndex].checked = true;
                if (this.state.exampleFilter[f.id]) {
                    this.state.exampleFilter[f.id].push(f.values[randomIndex].value);
                }
                else { this.state.exampleFilter[f.id] = [f.values[randomIndex].value] }
            }

        })

        this.cardFilterService.onExampleFilterChange(this.state.exampleFilter);
    }

    onClickBtnFilter(c: any, id: any, v: any = undefined): void {
        if (id === 'mainFilter') {
            this.cardFilterService.onMainFilterChange(c.value);
            this.createRandomExampleFilter();
        }

        if (id === "cardFilter") {
            v.checked = !v.checked;
            this.state.cardFilter = {};

            this.Filters.find(f => f.id === "cardFilter")?.content.map(c => {
                c.values?.map(v => {
                    if (v.checked) {
                        if (this.state.cardFilter[c.id]) { this.state.cardFilter[c.id].push(v.value) }
                        else { this.state.cardFilter[c.id] = [v.value] }
                    }
                })
            })

            this.cardFilterService.onCardFilterChange(this.state.cardFilter);
        }

        if (id === "exampleFilter") {
            v.checked = !v.checked;
            this.state.exampleFilter = {};

            this.Filters.find(f => f.id === "exampleFilter")?.content.map(c => {
                c.values?.map(v => {
                    if (v.checked) {
                        if (this.state.exampleFilter[c.id]) { this.state.exampleFilter[c.id].push(v.value) }
                        else { this.state.exampleFilter[c.id] = [v.value] }
                    }
                })
            })
            this.cardFilterService.onExampleFilterChange(this.state.exampleFilter);
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
