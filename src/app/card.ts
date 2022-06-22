export interface Card {
    text: {
        en: string
        ru: string
    }
    theory?: string
    scheme: string
    type: CardType
    isTheoryShow: boolean
}

export interface CardType {
    voice: string 
    time: string
    timeType: string
    pronoun: string
    verb: string
    sentenceType: string
}

export interface ConditionCard {
    text: {
        en: string
        ru: string
    }
    theory?: string
    scheme: string
    type: ConditionCardType
    isTheoryShow: boolean
}

interface ConditionCardType {
    ifClauseTime: string
    ifClauseSentenceType: string
    ifClausePronoun: string
    mainClauseTime: string
    mainClauseSentenceType: string
    mainClausePronoun: string
}