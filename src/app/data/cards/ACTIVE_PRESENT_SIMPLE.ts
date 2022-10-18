import { Card } from "../../cardInterfaces"

export const ACTIVE_PRESENT_SIMPLE: Card = {
    title: "ACTIVE PRESENT SIMPLE",
    mainFilter: 'general',
    cardFilter: {
        time: 'present',
        timeType: 'simple',
        voice: 'active'
    },
    theory: 'Для фактов и обычных повседневных дел.',
    schemas: ['Subject + V1/V1es/V1s', 'Subject + do/does not + V1', 'Do/does + subject + V1 ?'],
    examples: [
        {
            en: "I work every day.",
            ru: "Я работаю каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "I",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "We work every day.",
            ru: "Мы работаем каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "we",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "You work every day.",
            ru: "Ты работаешь каждый день. ИЛИ Вы работаете каждый день(во мн.ч.) (Обычно)",
            exampleFilter: {
                pronoun: "you",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "He works every day.",
            ru: "Он работает каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "They work every day.",
            ru: "Они работают каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "they",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "I do not work every day.",
            ru: "Я не работаю каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "I",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "We do not work every day.",
            ru: "Мы не работаем каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "we",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "You do not work every day.",
            ru: "Ты не работаешь каждый день. ИЛИ Вы работаете каждый день(во мн.ч.) (Обычно)",
            exampleFilter: {
                pronoun: "you",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "He does not work every day.",
            ru: "Он не работает каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "They do not work every day.",
            ru: "Они не работают каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "they",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "I go every day.",
            ru: "Я хожу каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "I",
                verb: "irregular",
                sentenceType: "statement"
            }
        },
        {
            en: "We go every day.",
            ru: "Мы ходим каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "we",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "You go every day.",
            ru: "Ты ходишь каждый день. ИЛИ Вы ходите каждый день(во мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "He goes every day.",
            ru: "Он ходит каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "They go every day.",
            ru: "Они ходят каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "they",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "I do not go every day.",
            ru: "Я не хожу каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "I",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "We do not go every day.",
            ru: "Мы не ходмм каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "we",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "You do not go every day.",
            ru: "Ты не ходишь каждый день(в ед.ч.) ИЛИ Вы ходите каждый день(во мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "He does not go every day.",
            ru: "Он не ходит каждый день.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "They do not go every day.",
            ru: "Они не ходят каждый день.",
            exampleFilter: {
                pronoun: "they",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "I do it every day.",
            ru: "Я делаю это каждый день.",
            exampleFilter: {
                pronoun: "I",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "We do it every day.",
            ru: "Мы делаем это каждый день.",
            exampleFilter: {
                pronoun: "we",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "You do it every day.",
            ru: "Ты делаешь это каждый день. ИЛИ Вы делаете это каждый день(во мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "He does it every day.",
            ru: "Он делает это каждый день.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "They do it every day.",
            ru: "Они делают каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "they",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "I do not do it every day.",
            ru: "Я не делают это каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "I",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "We do not do it every day.",
            ru: "Мы не делаем это каждый день. (Обычно)",
            exampleFilter: {
                pronoun: "we",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "You do not do it every day.",
            ru: "Ты не делаешь это каждый день(в ед.ч.) ИЛИ Вы делаете это каждый день(во мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "He does not do it every day.",
            ru: "Он не делает это каждый день.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "They do not do it every day.",
            ru: "Они не делают это каждый день.",
            exampleFilter: {
                pronoun: "they",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "I have a cat.",
            ru: "У меня есть кошка.",
            exampleFilter: {
                pronoun: "I",
                verb: "toHave",
                sentenceType: "statement"
            }
        },
        {
            en: "We have a cat.",
            ru: "У нас есть кошка",
            exampleFilter: {
                pronoun: "we",
                verb: "toHave",
                sentenceType: "statement"
            }
        },
        {
            en: "You have a cat..",
            ru: "У тебя есть кошка(в ед.ч.)  ИЛИ У вас есть кошка(во мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toHave",
                sentenceType: "statement"
            }
        },
        {
            en: "He has a cat.",
            ru: "У него есть кошка",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toHave",
                sentenceType: "statement"
            }
        },
        {
            en: "They have a cat.",
            ru: "У них есть кошка.",
            exampleFilter: {
                pronoun: "they",
                verb: "toHave",
                sentenceType: "statement"
            }
        },
        {
            en: "I do not have a cat.",
            ru: "У меня нет кошки.",
            exampleFilter: {
                pronoun: "I",
                verb: "toHave",
                sentenceType: "negation"
            }
        },
        {
            en: "We do not have a cat.",
            ru: "У нас нет кошки",
            exampleFilter: {
                pronoun: "we",
                verb: "toHave",
                sentenceType: "negation"
            }
        },
        {
            en: "You do not have a cat.",
            ru: "У тебя нет кошки(в ед.ч.) ИЛИ У вас нет кошки(во мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toHave",
                sentenceType: "negation"
            }
        },
        {
            en: "He does not have a cat.",
            ru: "У него нет кошки.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toHave",
                sentenceType: "negation"
            }
        },
        {
            en: "They do not have a cat.",
            ru: "У них нет кошки.",
            exampleFilter: {
                pronoun: "they",
                verb: "toHave",
                sentenceType: "negation"
            }
        },
        {
            en: "I am an engineer.",
            ru: "Я - инженер.",
            exampleFilter: {
                pronoun: "I",
                verb: "toBe",
                sentenceType: "statement"
            }
        },
        {
            en: "We are engineers.",
            ru: "Мы инженеры.",
            exampleFilter: {
                pronoun: "we",
                verb: "toBe",
                sentenceType: "statement"
            }
        },
        {
            en: "You are an engineer/s.",
            ru: "Ты - инженер(в ед.ч.)  ИЛИ Вы - инженеры(во мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toBe",
                sentenceType: "statement"
            }
        },
        {
            en: "He is an engineer.",
            ru: "Он - инженер.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toBe",
                sentenceType: "statement"
            }
        },
        {
            en: "They are an engineers.",
            ru: "Они - инженеры.",
            exampleFilter: {
                pronoun: "they",
                verb: "toBe",
                sentenceType: "statement"
            }
        },
        {
            en: "I am not an engineer.",
            ru: "Я не инженер.",
            exampleFilter: {
                pronoun: "I",
                verb: "toBe",
                sentenceType: "negation"
            }
        },
        {
            en: "We are not engineers.",
            ru: "Мы не инженеры.",
            exampleFilter: {
                pronoun: "we",
                verb: "toBe",
                sentenceType: "negation"
            }
        },
        {
            en: "You are not an engineer/s.",
            ru: "Ты не инженер(в ед.ч.)  ИЛИ Вы не инженеры(во мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toBe",
                sentenceType: "negation"
            }
        },
        {
            en: "He is not an engineer.",
            ru: "Он не инженер.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toBe",
                sentenceType: "negation"
            }
        },
        {
            en: "They are not an engineers.",
            ru: "Они не инженеры.",
            exampleFilter: {
                pronoun: "they",
                verb: "toBe",
                sentenceType: "negation"
            }
        }
    ]
}
