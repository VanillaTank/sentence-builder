import { Component, OnInit } from '@angular/core';
import { Filter } from './filters';
import { CardFilterService } from '../card-filter.service';
import { StorageService } from '../storage.service';
import { PRESETS } from '../data/filters/presets';
import { mainFilter } from '../data/filters/main';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
    Filters: Filter[] = [];
    presets: any = PRESETS;
    mainFilter: any = mainFilter;

    state: any = {
        main: '',
        cardFilter: {},
        exampleFilter: {}
    }

    constructor(private readonly cardFilterService: CardFilterService,
        private readonly storageService: StorageService) {
        this.cardFilterService.currentFilters.subscribe((filters: any) => this.Filters = filters);
    }

    ngOnInit(): void {
        this.state.main = this.mainFilter.content[0].id;
        this.cardFilterService.onMainFilterChange(this.mainFilter.content[0].id);
        this.createPresetExampleFilter();
    }

    createPresetExampleFilter() {
        for (let filterType of this.mainFilter.content) {
            if (this.state.main === filterType.id) {
                this.state.exampleFilter = this.presets[filterType.id];
            }
        }

        this.markExamplesChecked();
        this.cardFilterService.onExampleFilterChange(this.state.exampleFilter);
    }


    markExamplesChecked(): void {
        let exampleFilterContent: string[] = [];
        for (let key in this.state.exampleFilter) {
            const value = this.state.exampleFilter[key];
            exampleFilterContent = exampleFilterContent.concat(value);
        }

        this.Filters
            .find(f => f.id === "exampleFilter")?.content
            .forEach(c => {
                c.values?.forEach(v => {
                    v.checked = false;
                    if (exampleFilterContent.indexOf(v.value) !== -1) {
                        v.checked = true;
                    }
                })
            })
    }

    onClickBtnFilter(c: any, id: any, v: any = undefined): void {

        if (id === 'mainFilter') {
            this.Filters.forEach((f) => {
                if (f.type === 'btn-filter') {
                    f.content.forEach((cont) => {
                        cont.checked = false;
                        if (c.cont === c.id) {
                            cont.checked = true;
                        }
                    });
                }
            });

            this.cardFilterService.onMainFilterChange(c.value);

            this.storageService.save(this.state.main, this.state);

            if (this.storageService.isContain(c.id)) {
                this.state = JSON.parse(this.storageService.get(c.id) || '');
                this.cardFilterService.onCardFilterChange(this.state.cardFilter);
            } else {
                this.state.main = c.id;
                this.createPresetExampleFilter();
            }
        }

        if (id === "cardFilter") {
            v.checked = !v.checked;
            this.state.cardFilter = {};

            this.Filters
                .find(f => f.id === "cardFilter")?.content
                .forEach(c => {
                    c.values?.forEach(v => {
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
            this.Filters
                .find(f => f.id === "exampleFilter")?.content
                .forEach(c => {
                    c.values?.forEach(v => {
                        if (v.checked) {
                            if (this.state.exampleFilter[c.id]) { this.state.exampleFilter[c.id].push(v.value) }
                            else { this.state.exampleFilter[c.id] = [v.value] }
                        }
                    })
                })
            this.cardFilterService.onExampleFilterChange(this.state.exampleFilter);
        }

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
