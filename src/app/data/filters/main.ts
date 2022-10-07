import { Filter } from '../../filters/filters';

export const mainFilter: Filter = {
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
}