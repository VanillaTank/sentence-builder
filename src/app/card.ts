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
    voice: string,
    time: string,
    timeType: string
    pronoun: string
    verb: string
    sentenceType: string
}