import {SearchItem} from '../filters/interfaces'

export const GENERAL_SEARCH_ITEMS: SearchItem[] = [
    {
        title: 'Voice',
        id: 'voice',
        values: [
            { value: 'active', checked: false },
            { value: 'passive', checked: false }]
    },


    {
        title: 'Time',
        id: 'time',
        values:
            [
                { value: 'past', checked: false },
                { value: 'present', checked: false },
                { value: 'future', checked: false }]
    },

    {
        title: 'Time Type',
        id: 'timeType',
        values: [
            { value: 'simple', checked: false },
            { value: 'continious', checked: false },
            { value: 'perfect', checked: false },
            { value: 'perfect continious', checked: false }]
    },

    {
        title: 'Pronoun',
        id: 'pronoun',
        values: [
            { value: 'I', checked: false },
            { value: 'we', checked: false },
            { value: 'you', checked: false },
            { value: 'he, she, it', checked: false },
            { value: 'they', checked: false }]
    },

    {
        title: 'Verb',
        id: 'verb',
        values:[
        { value: 'regular', checked: false },
        { value: 'irregular', checked: false },
        { value: 'to be', checked: false },
        { value: 'to have', checked: false },
        { value: 'to do', checked: false }
    ]},

    {
        title: 'Sentence type',
        id: 'sentenceType',
        values:[
        { value: 'statement', checked: false },
        { value: 'negation', checked: false },
    ]}
]