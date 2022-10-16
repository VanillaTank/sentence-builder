import { Card } from "../../cardInterfaces"

export const ACTIVE_PAST_SIMPLE: Card = {
    title: "ACTIVE PAST SIMPLE",
    mainFilter: 'general',
    cardFilter: {
        time: 'past',
        timeType: 'simple',
        voice: 'active'
    },
    theory: 'Для фактов и обычных повседневных дел.',
    schemas: ['Subject + V1+ed/V2', 'Subject + did not + V1', 'Did + subject + V1 ?'],
    examples: [
        {
            en: 'I worked yesterday.',
            ru: 'Я вчера работал.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'regular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'We worked yesterday.',
            ru: 'Мы вчера работали.',
            exampleFilter: {
                pronoun: 'we',
                verb: 'regular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'You worked yesterday.',
            ru: 'Ты работал вчера(в ед.ч.) ИЛИ Вы работали вчера(во мн.ч.)',
            exampleFilter: {
                pronoun: 'you',
                verb: 'regular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'He worked yesterday.',
            ru: 'Он работал вчера.',
            exampleFilter: {
                pronoun: 'heSheIt',
                verb: 'regular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'They worked yesterday.',
            ru: 'Они работали вчера.',
            exampleFilter: {
                pronoun: 'they',
                verb: 'regular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'I did not work yesterday.',
            ru: 'Я не работал вчера.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'regular',
                sentenceType: 'negation'
            }
        },
        {
            en: 'We did not work yesterday.',
            ru: 'Мы не работали вчера.',
            exampleFilter: {
                pronoun: 'we',
                verb: 'regular',
                sentenceType: 'negation'
            }
        },
        {
            en: 'You did not work yesterday.',
            ru: 'Ты не работал вчера(ед.ч.) ИЛИ Вы не работали вчера(мн.ч.)',
            exampleFilter: {
                pronoun: 'you',
                verb: 'regular',
                sentenceType: 'negation'
            }
        },
        {
            en: 'He did not work yesterday.',
            ru: 'Он не работал вчера.',
            exampleFilter: {
                pronoun: 'heSheIt',
                verb: 'regular',
                sentenceType: 'negation'
            }
        },
        {
            en: 'They did not work yesterday.',
            ru: 'Они не работали вчера.',
            exampleFilter: {
                pronoun: 'they',
                verb: 'regular',
                sentenceType: 'negation'
            }
        },
        {
            en: 'I went yesterday.',
            ru: 'Я ходил вчера.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'irregular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'We went yesterday.',
            ru: 'Мы ходили вчера.',
            exampleFilter: {
                pronoun: 'we',
                verb: 'irregular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'You went yesterday.',
            ru: 'Ты ходил вчера(ед.ч.). ИЛИ Вы ходили вчера(мн.ч.)',
            exampleFilter: {
                pronoun: 'you',
                verb: 'irregular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'He went yesterday.',
            ru: 'Он ходил вчера.',
            exampleFilter: {
                pronoun: 'heSheIt',
                verb: 'irregular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'They went yesterday.',
            ru: 'Они ходили вчера.',
            exampleFilter: {
                pronoun: 'they',
                verb: 'irregular',
                sentenceType: 'statement'
            }
        },
        {
            en: 'I did not go yesterday.',
            ru: 'Я не ходил вчера.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'irregular',
                sentenceType: 'negation'
            }
        },
        {
            en: 'We did not go yesterday.',
            ru: 'Мы не ходили вчера.',
            exampleFilter: {
                pronoun: 'we',
                verb: 'irregular',
                sentenceType: 'negation'
            }
        },
        {
            en: 'You did not go yesterday.',
            ru: 'Ты не ходил вчера(ед.ч.) ИЛИ Вы ходили вчера(мн.ч.)',
            exampleFilter: {
                pronoun: 'you',
                verb: 'irregular',
                sentenceType: 'negation'
            }
        },
        {
            en: 'He did not go yesterday.',
            ru: 'Он не ходил вчера.',
            exampleFilter: {
                pronoun: 'heSheIt',
                verb: 'irregular',
                sentenceType: 'negation'
            }
        },
        {
            en: 'They did not go yesterday.',
            ru: 'Они не ходили вчера.',
            exampleFilter: {
                pronoun: 'they',
                verb: 'irregular',
                sentenceType: 'negation'
            }
        },
        {
            en: 'I did it yesterday.',
            ru: 'Я делал это вчера.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'toDo',
                sentenceType: 'statement'
            }
        },
        {
            en: 'We did it yesterday.',
            ru: 'Мы делали это вчера.',
            exampleFilter: {
                pronoun: 'we',
                verb: 'toDo',
                sentenceType: 'statement'
            }
        },
        {
            en: 'You did it yesterday.',
            ru: 'Ты делал это вчера(ед.ч.) ИЛИ Вы делали это вчера(мн.ч.)',
            exampleFilter: {
                pronoun: 'you',
                verb: 'toDo',
                sentenceType: 'statement'
            }
        },
        {
            en: 'He did it yesterday.',
            ru: 'Он делал это вчера.',
            exampleFilter: {
                pronoun: 'heSheIt',
                verb: 'toDo',
                sentenceType: 'statement',
            }
        },
        {
            en: 'They did it yesterday.',
            ru: 'Они делали это вчера.',
            exampleFilter: {
                pronoun: 'they',
                verb: 'toDo',
                sentenceType: 'statement'
            }
        },
        {
            en: 'I did not do it yesterday.',
            ru: 'Я не делал этого вчера.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'toDo',
                sentenceType: 'negation'
            }
           
        },
        {
            en: 'We did not do it yesterday.',
            ru: 'Мы делали этого вчера.',
            exampleFilter: {
                pronoun: 'we',
                verb: 'toDo',
                sentenceType: 'negation'
            }
        },
        {
            en: 'You did not do it yesterday.',
            ru: 'Ты не делал этого вчера(ед.ч.) ИЛИ Вы не делали этого вчера(мн.ч.)',
            exampleFilter: {
                pronoun: 'you',
                verb: 'toDo',
                sentenceType: 'negation'
            }
        },
        {
            en: 'He did not do it yesterday.',
            ru: 'Он не делал этого вчера.',
            exampleFilter: {
                pronoun: 'heSheIt',
                verb: 'toDo',
                sentenceType: 'negation'
            }
        },
        {
            en: 'They did not do it yesterday.',
            ru: 'Они не делали этого вчера.',
            exampleFilter: {
                pronoun: 'they',
                verb: 'toDo',
                sentenceType: 'negation'
            }
        },
        {
            en: 'I had a cat.',
            ru: 'У меня была кошка.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'toHave',
                sentenceType: 'statement'
            }
        },
        {
            en: 'We had a cat.',
            ru: 'У нас была кошка.',
            exampleFilter: {
                pronoun: 'we',
                verb: 'toHave',
                sentenceType: 'statement'
            }
        },
        {
            en: 'You had a cat.',
            ru: 'У тебя была кошка(ед.ч.) ИЛИ У вас была кошка(мн.ч.)',
            exampleFilter: {
                pronoun: 'you',
                verb: 'toHave',
                sentenceType: 'statement'
            }
        },
        {
            en: 'He had a cat.',
            ru: 'У него была кошка.',
            exampleFilter: {
                pronoun: 'heSheIt',
                verb: 'toHave',
                sentenceType: 'statement'
            }
        },
        {
            en: 'They had a cat.',
            ru: 'У них была кошка.',
            exampleFilter: {
                pronoun: 'they',
                verb: 'toHave',
                sentenceType: 'statement'
            }
        },
        {
            en: 'I did not have a cat.',
            ru: 'У меня не было кошки.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'toHave',
                sentenceType: 'negation'
            }
        },
        {
            en: 'We did not have a cat.',
            ru: 'У нас не было кошки',
            exampleFilter: {
                pronoun: 'we',
                verb: 'toHave',
                sentenceType: 'negation'
            }
        },
        {
            en: 'You did not have a cat.',
            ru: 'У тебя не было кошки(ед.ч.) ИЛИ У вас не было кошки(мн.ч.)',
            exampleFilter: {
                pronoun: 'you',
                verb: 'toHave',
                sentenceType: 'negation'
            }
        },
        {
            en: 'He did not have a cat.',
            ru: 'У него не было кошки.',
            exampleFilter: {
                pronoun: 'heSheIt',
                verb: 'toHave',
                sentenceType: 'negation'
            }
        },
        {
            en: 'They did not have a cat.',
            ru: 'У них не было кошки.',
            exampleFilter: {
                pronoun: 'they',
                verb: 'toHave',
                sentenceType: 'negation'
            }
        },
        {
            en: 'I was an engineer.',
            ru: 'Я был инженером.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'toBe',
                sentenceType: 'statement'
            }
        },
        {
            en: 'We were engineers.',
            ru: 'Мы были инженерами.',
            exampleFilter: {
                pronoun: 'we',
                verb: 'toBe',
                sentenceType: 'statement'
            }
        },
        {
            en: 'You were an engineer/s.',
            ru: 'Ты был инженером(ед.ч.) ИЛИ Вы были инженерами(мн.ч.)',
            exampleFilter: {
                pronoun: 'you',
                verb: 'toBe',
                sentenceType: 'statement'
            }
        },
        {
            en: 'He was an engineer.',
            ru: 'Он был инженером.',
            exampleFilter: {
                pronoun: 'heSheIt',
                verb: 'toBe',
                sentenceType: 'statement'
            }
        },
        {
            en: 'They were an engineers.',
            ru: 'Они были инженерами.',
            exampleFilter: {
                pronoun: 'they',
                verb: 'toBe',
                sentenceType: 'statement'
            }
        },
        {
            en: 'I was not an engineer.',
            ru: 'Я не был инженером.',
            exampleFilter: {
                pronoun: 'I',
                verb: 'toBe',
                sentenceType: 'negation'
            }
        },
        {
            en: 'We were not engineers.',
            ru: 'Мы не были инженерами.',
            exampleFilter: {
                pronoun: 'we',
                verb: 'toBe',
                sentenceType: 'negation'
            }
        },
        {
            en: 'You were not an engineer/s.',
            ru: 'Ты не был инженером(ед.ч.) ИЛИ Вы не были инженерами(мн.ч.)',
            exampleFilter: {
                pronoun: 'you',
                verb: 'toBe',
                sentenceType: 'negation'
            }
        },
        {
            en: 'He was not an engineer.',
            ru: 'Он не был инженером.',
            exampleFilter: {
                pronoun: 'heSheIt',
                verb: 'toBe',
                sentenceType: 'negation'
            }
        },
        {
            en: 'They were not an engineers.',
            ru: 'Они не были инженерами.',
            exampleFilter: {
                pronoun: 'they',
                verb: 'toBe',
                sentenceType: 'negation'
            }
        },
    ]
}
