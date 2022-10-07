import { Filter } from '../../filters/filters';

export const generalFilter: Filter[] = [{
    title: 'CARD FILTER',
    id: 'cardFilter',
    type: 'list-filter',
    content: [
        {
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
        },
        {
            title: 'VERB',
            id: 'verb',
            shown: false,
            values: [{ title: 'regular', checked: false },
            { title: 'irregular', checked: false }],
            state: false
        }]
}]