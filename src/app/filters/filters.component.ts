import { Component } from '@angular/core';
import { Filter } from './filters';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

    Filters: Filter[] | any = [
        {
            title: 'MAIN FILTER',
            id: 'mainFilter',
            type: 'btn-filter',
            content: [{
                title: 'GENERAL',
                value: 'general',
                state: false
            },
            {
                title: 'CONDITIONAL',
                value: 'conditional',
                state: false
            }]
        },
        {
            title: 'CARD FILTER',
            id: 'cardFilter',
            type: 'list-filter',
            content: [{
                title: 'TIME',
                id: 'time',
                shown: false,
                values: [{ title: 'Past', checked: false },
                { title: 'Present', checked: false },
                { title: 'Future', checked: false },
                { title: 'Future-in-the-Past', checked: false }
                ],
                selectedValue: ''
            },
            {
                title: 'TIME TYPE',
                id: 'timeType',
                shown: false,
                values: [{ title: 'Simple', checked: false },
                { title: 'Continuous', checked: false },
                { title: 'Perfect', checked: false },
                { title: 'Perfect Continuous', checked: false }
                ],
                selectedValue: ''
            }]
        },
        {
            title: 'EXAMPLE FILTER',
            id: 'exampleFilter',
            type: 'list-filter',
            content: [{
                title: 'Pronoun',
                id: 'pronoun',
                shown: false,
                values: [{ title: 'I', checked: false },
                { title: 'We', checked: false },
                { title: 'You', checked: false },
                { title: 'He, she, it', checked: false },
                { title: 'They', checked: false },
                ],
                state: false
            },
            {
                title: 'Verb',
                id: 'verb',
                shown: false,
                values: [{ title: 'regular', checked: false },
                { title: 'irregular', checked: false }],
                state: false
            }]
        }
    ]
    constructor() { }

    onClickBtnFilter(c: any): void {
        this.Filters.map((f: any) => {
            if (f.type === 'btn-filter') {
                f.content.forEach((c: any) => c.state = false);
            }
            return;
        })
        c.state = !c.state;
    }

    onTitleRowClick(c: any): void {
        c.shown = !c.shown;
    }


}
