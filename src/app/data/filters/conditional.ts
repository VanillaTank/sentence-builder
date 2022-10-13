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
            values: [{ title: 'type 0', checked: false, value: 'type0' },
            { title: 'type 1', checked: false, value: 'type1' },
            { title: 'type 2', checked: false, value: 'type2' },
            { title: 'type 3', checked: false, value: 'type3' }
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
                { title: 'I', checked: false, value: 'I' },
                { title: 'We', checked: false, value: 'we' },
                { title: 'You', checked: false, value: 'you' },
                { title: 'He, she, it', checked: false, value: 'heSheIt' },
                { title: 'They', checked: false, value: 'they' },
            ],
            checked: false
        }]
}]