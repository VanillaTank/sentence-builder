import { ACTIVE_PAST_SIMPLE } from './cards/ACTIVE_PAST_SIMPLE';
import { ACTIVE_PRESENT_SIMPLE } from './cards/ACTIVE_PRESENT_SIMPLE';
import { ACTIVE_PRESENT_CONTINUOUS } from './cards/ACTIVE_PRESENT_CONTINIOUS';
import { ACTIVE_FUTURE_SIMPLE } from './cards/ACTIVE_FUTURE_SIMPLE';
import { ACTIVE_PAST_CONTINUOUS } from './cards/ACTIVE_PAST_CONTINUOUS';
import { ACTIVE_FUTURE_CONTINUOUS } from './cards/ACTIVE_FUTURE_CONTINUOUS';
import { ACTIVE_PAST_PERFECT } from './cards/ACTIVE_PAST_PERFECT'
import { ACTIVE_PRESENT_PERFECT } from './cards/ACTIVE_PRESENT_PERFECT'

import { CONDITIONAL_CARDS } from './cards/CONDITION';

export const CARDS = [
    {
        mainFilter: "general",
        cards: [
            ACTIVE_PAST_SIMPLE,
            ACTIVE_PRESENT_SIMPLE,
            ACTIVE_FUTURE_SIMPLE,

            ACTIVE_PAST_CONTINUOUS,
            ACTIVE_PRESENT_CONTINUOUS,
            ACTIVE_FUTURE_CONTINUOUS,

            ACTIVE_PAST_PERFECT, 
            ACTIVE_PRESENT_PERFECT
        ]
    },
    {
        mainFilter: "conditional",
        cards: [...CONDITIONAL_CARDS]
    }
]