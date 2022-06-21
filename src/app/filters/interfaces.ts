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