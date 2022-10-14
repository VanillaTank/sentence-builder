export interface Card {
    mainFilter: string
    shown?: boolean
    title: string
    cardFilter: any | { title: string, value: string }[]
    theory: string
    comments?: string
    schemas: string[]
    examples: Example[] | any
}

export interface Example {
    shown?: boolean
    en: string
    ru: string
    comment?: string
    exampleFilter:  any | { title: string, value: string }[]
}
