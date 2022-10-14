import { Filter } from '../../filters/filters';

export const mainFilter: any = {
    title: 'MAIN FILTER',
    id: 'mainFilter',
    type: 'btn-filter',
    content: [{
        id: 'general',
        title: 'GENERAL',
        value: 'general',
        checked: true
    },
    {
        id: 'conditional',
        title: 'CONDITIONAL',
        value: 'conditional',
        checked: false
    }]
}