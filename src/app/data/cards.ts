import { PAST_SIMPLE } from './cards/PAST_SIMPLE';
// import { PRESENT_SIMPLE } from './cards/PRESENT_SIMPLE';
import { PRESENT_CONTINUOUS } from './cards/PRESENT_CONTINIOUS';
// import { FUTURE_SIMPLE } from './cards/FUTURE_SIMPLE';
// import { PAST_CONTINUOUS } from './cards/PAST_CONTINUOUS';
// import { PRESENT_PERFECT } from './cards/PRESENT_PERFECT'
import { CONDITIONAL_CARDS } from './cards/CONDITION';
// import { PAST_PERFECT } from './cards/PAST_PERFECT'
// import { FUTURE_CONTINUOUS } from './cards/FUTURE_CONTINUOUS';

export const CARDS = [
    {
        mainFilter: "general",
        cards: [
            // ...PRESENT_SIMPLE,
            PAST_SIMPLE,
            // ...FUTURE_SIMPLE,
            PRESENT_CONTINUOUS,
            // ...PAST_CONTINUOUS, ...FUTURE_CONTINUOUS,
            // ...PRESENT_PERFECT, ...PAST_PERFECT
        ]
    },
    {
        mainFilter: "conditional",
        cards: [...CONDITIONAL_CARDS]
    }
]