import { Card } from "../../cardInterfaces"

export const ACTIVE_PRESENT_CONTINUOUS: Card = {
    title: "ACTIVE PRESENT CONTINUOUS",
    mainFilter: 'general',
    cardFilter: {
        time: 'present',
        timeType: 'continuous',
        voice: 'active'
    },
    theory: 'Настоящее длительное',
    schemas: ['Subject + am/is/are + Ving', 'Subject + am/is/are + not + Ving', 'Am/Is/Are + subject + Ving ?'],
    examples: [
        {
            en: 'I am working now.',
            ru: 'Я работаю сейчас.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'regular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'We are working now.',
            ru: 'Мы работаем (сейчас).',
            exampleFilter: {
                pronoun: 'we',
                verb: 'regular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'You are working now.',
            ru: 'Ты работаешь сейчас. ИЛИ Вы работаете сейчас(во мн.ч.) ',
            exampleFilter: {
                pronoun: 'you',
                verb: 'regular',
                sentenceType: 'statement'
            }
        },




        {
            en: "He is working now.",
            ru: "Он работает сейчас. ",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "They are working now.",
            ru: "Они работают сейчас. ",
            exampleFilter: {
                pronoun: "they",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "I am not working now.",
            ru: "Я не работаю сейчас.",
            exampleFilter: {
                pronoun: "I",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "We are not working now.",
            ru: "Мы не работаем сегодня.",
            exampleFilter: {
                pronoun: "we",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "You are not working now.",
            ru: "Ты не работаешь сейчас. ИЛИ Вы работаете сейчас(во мн.ч.) ",
            exampleFilter: {
                pronoun: "you",
                verb: "regular",
                sentenceType: "negation"
            }
        },


        {
            en: "He is not working now.",
            ru: "Он не работает сейчас.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "They are not working now.",
            ru: "Они не работают сейчас.",
            exampleFilter: {
                pronoun: "they",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "I am going now.",
            ru: "Я иду сейчас. ",
            exampleFilter: {
                pronoun: "I",
                verb: "irregular",
                sentenceType: "statement"
            }
        },
        {
            en: "We are going now.",
            ru: "Мы идем (сейчас).",
            exampleFilter: {
                pronoun: "we",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "You are going now.",
            ru: "Ты идешь сейчас(ед.ч.) ИЛИ Вы идете сейчас(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "He is going now.",
            ru: "Он идет сейчас. ",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "They are going now.",
            ru: "Они идут сейчас. ",
            exampleFilter: {
                pronoun: "they",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "I am not going now.",
            ru: "Я не иду сейчас.",
            exampleFilter: {
                pronoun: "I",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "We are not going now.",
            ru: "Мы не иду сейчас. ",
            exampleFilter: {
                pronoun: "we",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "You are not going now.",
            ru: "Ты не идешь сейчас(ед.ч.) ИЛИ Вы не идете сейчас(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "He is not going now.",
            ru: "Он не идет сейчас.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "They are not going now.",
            ru: "Они не идут сейчас.",
            exampleFilter: {
                pronoun: "they",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "I am doing it now.",
            ru: "Я делаю это это сейчас.",
            exampleFilter: {
                pronoun: "I",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "We are doing it now.",
            ru: "Мы делаем это сейчас.",
            exampleFilter: {
                pronoun: "we",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "You are doing it now.",
            ru: "Ты делаешь это сейчас(ед.ч.) ИЛИ Вы делаете это сейчас(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "He is doing it now.",
            ru: "Он делает это сейчас.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "They are doing it now.",
            ru: "Они делают каждый день. ",
            exampleFilter: {
                pronoun: "they",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "I am not doing it now.",
            ru: "Я не делают это сейчас. ",
            exampleFilter: {
                pronoun: "I",
                verb: "toDo",
                sentenceType: "negation"
            }
        },

        {
            en: "We are not doing it now.",
            ru: "Мы не делаем это каждый день.",
            exampleFilter: {
                pronoun: "we",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "You are not doing it now.",
            ru: "Ты не делаешь это сейчас(ед.ч.) ИЛИ Вы делаете это сейчас(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "He is not doing it now.",
            ru: "Он не делает это сейчас.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "They are not doing it now.",
            ru: "Они не делают это сейчас.",
            exampleFilter: {
                pronoun: "they",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
    ]
}
