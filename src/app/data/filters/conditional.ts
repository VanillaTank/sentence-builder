import { Filter } from '../../filters/filters';

export const conditionalFilter: Filter[] = [{
    title: 'CARD FILTER',
    id: 'cardFilter',
    type: 'list-filter',
    content: [
        {
            title: 'TYPE',
            id: 'type',
            shown: false,
            values: [{ title: '0', checked: false },
            { title: '1', checked: false },
            { title: '2', checked: false },
            { title: '3', checked: false }
            ],
            selectedValue: ''
        }]
},
{
    title: 'EXAMPLE FILTER',
    id: 'exampleFilter',
    type: 'list-filter',
    content: [
        {
            title: 'PRONOUN',
            id: 'pronoun',
            shown: false,
            values: [
                { title: 'I', checked: false },
                { title: 'We', checked: false },
                { title: 'You', checked: false },
                { title: 'He, she, it', checked: false },
                { title: 'They', checked: false },
            ],
            state: false
        }]
}]