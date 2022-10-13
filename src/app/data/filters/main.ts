import { Filter } from '../../filters/filters';

export const mainFilter: Filter = {
    title: 'MAIN FILTER',
    id: 'mainFilter',
    type: 'btn-filter',
    content: [{
        title: 'GENERAL',
        value: 'general',
        checked: false
    },
    {
        title: 'CONDITIONAL',
        value: 'conditional',
        checked: false
    }]
}