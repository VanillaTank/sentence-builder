export interface Card {
    text: {
        en: string
        ru: string
    }
    theory?: string
    schema: string
    type: {
        voice: string,
        time: string,
        timeType: string
    }
}

// export interface Card {
//     text: {
//         en: string
//         ru: string
//     }
//     theory?: string
//     schema: string
//     type: string[]
// }