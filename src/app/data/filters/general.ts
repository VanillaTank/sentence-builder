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
                ],
                selectedValue: ''
            },
            {
                title: 'TIME TYPE',
                id: 'timeType',
                shown: false,
                values: [{ title: 'Simple', checked: false, value: 'simple'  },
                { title: 'Continuous', checked: false, value: 'continuous'  },
                { title: 'Perfect', checked: false, value: 'perfect'  },
                { title: 'Perfect Continuous', checked: false, value: 'perfectContinuous'  }
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
            },
            {
                title: 'VERB',
                id: 'verb',
                shown: false,
                values: [{ title: 'Regular', checked: false, value: 'regular' },
                { title: 'Irregular', checked: false, value: 'irregular' }],
                checked: false
            }]
    }]