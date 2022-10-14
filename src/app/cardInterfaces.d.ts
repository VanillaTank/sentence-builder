export interface Card {
    mainFilter: string
    shown?: boolean
    title: string
    cardFilter: { title: string, value: string }[]
    theory: string
    comments?: string
    schemas: string[]
    examples: Example[]
}

export interface Example {
    shown?: boolean
    en: string
    ru: string
    comment?: string
    exampleFilter: { title: string, value: string }[]
}
