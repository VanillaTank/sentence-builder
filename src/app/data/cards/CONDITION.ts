import { Card } from "../../cardInterfaces"

export const CONDITIONAL_CARDS: Card[] = [
    {
        title: "TYPE 0",
        mainFilter: 'conditional',
        cardFilter: {
            type: '0'
        },
        theory: 'Факты, истины ,закономерности, законы природы.',
        schemas: ['Condition: If/when + Present Simple, Main part: Present Simple'],
        examples: [
            {
                en: 'If I heat water, it will boil.',
                ru: 'Если я нагрею воду, она вскипит.',
                exampleFilter: {
                    pronoun: 'I'
                }
            },

        ]
    },

    {
        title: "TYPE 1",
        mainFilter: 'conditional',
        cardFilter: {
            type: '1'
        },
        theory: 'Условие. Что-то случиться, если...',
        schemas: ['Condition: If/when + Present Simple, Main part: Future Simple'],
        examples: [
            {
                en: 'If I get this job, I will earn a lot of money.',
                ru: 'Если я получу эту работу, я заработаю много денег.',
                exampleFilter: {
                    pronoun: 'I'
                }
            },

        ]
    },

    {
        title: "TYPE 2",
        mainFilter: 'conditional',
        cardFilter: {
            type: '2'
        },
        theory: 'Воображаемая или нереальная ситуация в настоящем.',
        schemas: ['Condition: If/when + Past Simple, Main part: would + V1'],
        examples: [
            {
                en: 'If I had a lot of money, I would build a castle.',
                ru: 'Если бы у меня было много денег, я бы построил замок.',
                exampleFilter: {
                    pronoun: 'I'
                }
            },

        ]
    },

    {
        title: "TYPE 3",
        mainFilter: 'conditional',
        cardFilter: {
            type: '3'
        },
        theory: 'Воображаемая или нереальная ситуация в прошлом.',
        schemas: ['Condition: If/when + Past Perfect, Main part: would + have V3/Ved'],
        examples: [
            {
                en: 'If I had left lately, I would have missed the train.',
                ru: 'Если бы я вышел позже, я бы пропустил поезд.',
                exampleFilter: {
                    pronoun: 'I'
                }
            },

        ]
    },
];
