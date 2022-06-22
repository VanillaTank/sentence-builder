export interface SearchItem {
    title: string
    id: string
    values: SearchItemValues[]
    
}

export interface SearchItemValues {
    value: string,
    checked: boolean
}

export interface GeneralSearchValues {
    [key: string]: string[]
    voice: string[]
    time: string[]
    timeType: string[]
    pronoun: string[]
    verb: string[]
    sentenceType: string[]
}

export interface ConditionSearchValues {
    [key: string]: string[]
    ifClauseTime: string[]
    ifClauseSentenceType: string[]
    ifClausePronoun: string[]
    mainClauseTime: string[]
    mainClauseSentenceType: string[]
    mainClausePronoun: string[]
}