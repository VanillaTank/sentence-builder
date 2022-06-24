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
            { value: 'continuous', checked: false },
            { value: 'perfect', checked: false },
            { value: 'perfect continuous', checked: false }]
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

export const CONDITION_SEARCH_ITEMS: SearchItem[] = [
    {
        title: 'Conditional Time',
        id: 'ifClauseTime',
        values: [
            { value: 'past', checked: false },
            { value: 'present', checked: false },
            { value: 'future', checked: false }]
    },

    {
        title: 'Conditional sentence type',
        id: 'ifClauseSentenceType',
        values:[
        { value: 'statement', checked: false },
        { value: 'negation', checked: false },
    ]},

    {
        title: 'Conditional pronoun',
        id: 'ifClausePronoun',
        values: [
            { value: 'I', checked: false },
            { value: 'we', checked: false },
            { value: 'you', checked: false },
            { value: 'he, she, it', checked: false },
            { value: 'they', checked: false }]
    },

    {
        title: 'Main Time',
        id: 'mainClauseTime',
        values: [
            { value: 'past', checked: false },
            { value: 'present', checked: false },
            { value: 'future', checked: false }]
    },

    {
        title: 'Main Sentence type',
        id: 'mainClauseSentenceType',
        values:[
        { value: 'statement', checked: false },
        { value: 'negation', checked: false },
    ]},

    {
        title: 'Main pronoun',
        id: 'mainClausePronoun',
        values: [
            { value: 'I', checked: false },
            { value: 'we', checked: false },
            { value: 'you', checked: false },
            { value: 'he, she, it', checked: false },
            { value: 'they', checked: false }]
    },


]
