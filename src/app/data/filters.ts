import { mainFilter } from './filters/main'
import { generalFilter } from './filters/general'
import { conditionalFilter } from './filters/conditional'
import { Filter } from '../filters/filters'

export interface MyFilters {
    main: Filter[];
    general: Filter[];
    conditional: Filter[];
}

export const FILTERS: MyFilters = {
    main: [mainFilter],
    general: generalFilter,
    conditional: conditionalFilter
}