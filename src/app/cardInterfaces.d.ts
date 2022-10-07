export interface Card {
    mainFilter: string
    title: string
    cardFilter: { title: string, value: string }[]
    theory: string
    comments?: string
    schemas: string[]
    examples: Example[]
}

export interface Example {
    en: string
    ru: string
    comment?: string
    exampleFilter: { title: string, value: string }[]
}
