import { Card } from "../../cardInterfaces"

export const PAST_SIMPLE: Card = {
    title: "ACTIVE PAST SIMPLE",
    mainFilter: 'general',
    cardFilter:  {
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
    ]
}

//  exampleFilter : {}

export const PAST_SIMPLE_prev = [
    // Active Past Simple to do statement
    {
        text: {
            en: 'I did it yesterday.',
            ru: 'Я делал это вчера.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'I + V2(did)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We did it yesterday.',
            ru: 'Мы делали это вчера.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'We + V2(did)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You did it yesterday.',
            ru: 'Ты делал это вчера(ед.ч.) ИЛИ Вы делали это вчера(мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'You + V2(did)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He did it yesterday.',
            ru: 'Он делал это вчера.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'He/she/it + V2(did)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They did it yesterday.',
            ru: 'Они делали это вчера.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'They + V2(did)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },

    // Active Past Simple to do negation
    {
        text: {
            en: 'I did not do it yesterday.',
            ru: 'Я не делал этого вчера.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'I + did not + V1(do)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We did not do it yesterday.',
            ru: 'Мы делали этого вчера.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'We + did not + V1(do)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You did not do it yesterday.',
            ru: 'Ты не делал этого вчера(ед.ч.) ИЛИ Вы не делали этого вчера(мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'You + did not + V1(do)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He did not do it yesterday.',
            ru: 'Он не делал этого вчера.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'He/she/it + did not + V1(do)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They did not do it yesterday.',
            ru: 'Они не делали этого вчера.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'They + did not + V1(do)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },

    // Active Past Simple to have statement
    {
        text: {
            en: 'I had a cat.',
            ru: 'У меня была кошка.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'I + V2(had)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We had a cat.',
            ru: 'У нас была кошка.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'We + V2(had)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You had a cat.',
            ru: 'У тебя была кошка(ед.ч.) ИЛИ У вас была кошка(мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'You + V2(had)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He had a cat.',
            ru: 'У него была кошка.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'He/she/it + V2(had)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They had a cat.',
            ru: 'У них была кошка.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'They + V2(had)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },

    // Active Past Simple to have negation
    {
        text: {
            en: 'I did not have a cat.',
            ru: 'У меня не было кошки.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'I + did not + have(V1)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We did not have a cat.',
            ru: 'У нас не было кошки'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'We + did not + have(V1)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You did not have a cat.',
            ru: 'У тебя не было кошки(ед.ч.) ИЛИ У вас не было кошки(мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'You + did not + have(V1)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He did not have a cat.',
            ru: 'У него не было кошки.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'He/she/it + did not + have(V1)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They did not have a cat.',
            ru: 'У них не было кошки.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'They + did not + have(V1)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },

    // Active Past Simple to be statement
    {
        text: {
            en: 'I was an engineer.',
            ru: 'Я был инженером.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'I + was',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We were engineers.',
            ru: 'Мы были инженерами.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'We + were',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You were an engineer/s.',
            ru: 'Ты был инженером(ед.ч.) ИЛИ Вы были инженерами(мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'You + were',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He was an engineer.',
            ru: 'Он был инженером.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'He/she/it + was',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They were an engineers.',
            ru: 'Они были инженерами.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'They + were',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },

    // Active Past Simple to be negation
    {
        text: {
            en: 'I was not an engineer.',
            ru: 'Я не был инженером.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'I + was not',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We were not engineers.',
            ru: 'Мы не были инженерами.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'We + were not',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You were not an engineer/s.',
            ru: 'Ты не был инженером(ед.ч.) ИЛИ Вы не были инженерами(мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'You + were not',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He was not an engineer.',
            ru: 'Он не был инженером.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'He/she/it + was not',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They were not an engineers.',
            ru: 'Они не были инженерами.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        scheme: 'They + were not',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to be',
            sentenceType: 'negation',
        }
    }
]