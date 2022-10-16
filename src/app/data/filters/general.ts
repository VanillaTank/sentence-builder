import { Filter } from '../../filters/filters';

export const generalFilter: Filter[] = [
    {
        title: 'CARD FILTER',
        id: 'cardFilter',
        type: 'list-filter',
        content: [
            {
                title: 'TIME',
                id: 'time',
                shown: false,
                values: [{ title: 'Past', checked: false, value: 'past' },
                { title: 'Present', checked: false, value: 'present' },
                { title: 'Future', checked: false, value: 'future' },
                { title: 'Future-in-the-Past', checked: false, value: 'futureInThePast' }
                ]
            },
            {
                title: 'TIME TYPE',
                id: 'timeType',
                shown: false,
                values: [{ title: 'Simple', checked: false, value: 'simple' },
                { title: 'Continuous', checked: false, value: 'continuous' },
                { title: 'Perfect', checked: false, value: 'perfect' },
                { title: 'Perfect Continuous', checked: false, value: 'perfectContinuous' }
                ]
            },
            {
                title: 'VOICE',
                id: 'voice',
                shown: false,
                values: [
                    { title: 'Active', checked: false, value: 'active' },
                    { title: 'Passive', checked: false, value: 'passive' }
                ]
            }
        ]
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
            },
            {
                title: 'VERB',
                id: 'verb',
                shown: false,
                values: [
                    { title: 'Regular', checked: false, value: 'regular' },
                    { title: 'Irregular', checked: false, value: 'irregular' },
                    { title: 'To do', checked: false, value: 'toDo' },
                    { title: 'To have', checked: false, value: 'toHave' },
                    { title: 'To be', checked: false, value: 'toBe' },
                ],
                checked: false
            },
            {
                title: 'SENTENCE TYPE',
                id: 'sentenceType',
                shown: false,
                values: [
                    { title: 'Statement', checked: false, value: 'statement' },
                    { title: 'Negation', checked: false, value: 'negation' },
                    { title: 'General (yes/no) question', checked: false, value: 'generalQuestion' },
                    { title: 'Special (wh-) question', checked: false, value: 'specialQuestion' },
                    { title: 'Who/what question', checked: false, value: 'whoWhatQuestion' },
                    { title: 'Alternative question', checked: false, value: 'alternativeQuestion' },
                    { title: 'Tag question', checked: false, value: 'tagQuestion' },
                ],
                checked: false
            }
        ]
    }]