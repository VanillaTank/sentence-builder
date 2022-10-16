import { Card } from "../../cardInterfaces"

export const ACTIVE_FUTURE_CONTINUOUS: Card = {
    title: "ACTIVE FUTURE CONTINUOUS",
    mainFilter: 'general',
    cardFilter: {
        time: 'future',
        timeType: 'continuous',
        voice: 'active'
    },
    theory: 'Для фактов и обычных повседневных дел.',
    schemas: ['Subject + will be + V1-ing', 'Subject + will not be + V1-ing', 'Will + subject + be + V1-ing ?'],
    examples: [
        {
            en: "I will be working tomorrow at six o'clock.",
            ru: "Я буду работать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "I",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "We will be working tomorrow at six o'clock.",
            ru: "Мы будем работать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "we",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "You will be working tomorrow at six o'clock.",
            ru: "Ты будешь работать завтра в 6 часов(ед.ч.) ИЛИ Вы будете работать завтра в 6 часов(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "He will be working tomorrow at six o'clock.",
            ru: "Он будет работать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "They will be working tomorrow at six o'clock.",
            ru: "Они будут работать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "they",
                verb: "regular",
                sentenceType: "statement"
            }
        },
        {
            en: "I will not be working tomorrow at six o'clock.",
            ru: "Я не буду работать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "I",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "We will not be working tomorrow at six o'clock.",
            ru: "Мы не будем работать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "we",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "You will not be working tomorrow at six o'clock.",
            ru: "Ты не будешь работать завтра в 6 часов(ед.ч.) ИЛИ Вы не будете работать завтра в 6 часов(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "He will not be working tomorrow at six o'clock.",
            ru: "Он не будет работать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "They will not be working tomorrow at six o'clock.",
            ru: "Они не будут работать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "they",
                verb: "regular",
                sentenceType: "negation"
            }
        },
        {
            en: "I will be sleeping tomorrow at six o'clock.",
            ru: "Я буду спать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "I",
                verb: "irregular",
                sentenceType: "statement"
            }
        },
        {
            en: "We will be sleeping tomorrow at six o'clock.",
            ru: "Мы будем спать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "we",
                verb: "irregular",
                sentenceType: "statement"
            }
        },
        {
            en: "You will be sleeping tomorrow at six o'clock.",
            ru: "Ты будешь спать завтра в 6 часов(ед.ч.) ИЛИ Вы будете спать завтра в 6 часов(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "irregular",
                sentenceType: "statement"
            }
        },
        {
            en: "He will be sleeping tomorrow at six o'clock.",
            ru: "Он будет спать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "irregular",
                sentenceType: "statement"
            }
        },
        {
            en: "They will be sleeping tomorrow at six o'clock.",
            ru: "Они будут спать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "they",
                verb: "irregular",
                sentenceType: "statement"
            }
        },
        {
            en: "I will not be sleeping tomorrow at six o'clock.",
            ru: "Я не буду спать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "I",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "We will not be sleeping tomorrow at six o'clock.",
            ru: "Мы не будем спать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "we",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "You will not be sleeping tomorrow at six o'clock.",
            ru: "Ты не будешь спать завтра в 6 часов(ед.ч.) ИЛИ Вы не будете спать завтра в 6 часов(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "He will not be sleeping tomorrow at six o'clock.",
            ru: "Он не будет спать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "They will not be sleeping tomorrow at six o'clock.",
            ru: "Они не будут спать завтра в 6 часов.",
            exampleFilter: {
                pronoun: "they",
                verb: "irregular",
                sentenceType: "negation"
            }
        },
        {
            en: "I will be doing it tomorrow at six o'clock.",
            ru: "Я буду делать это завтра в 6 часов.",
            exampleFilter: {
                pronoun: "I",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "We will be doing it tomorrow at six o'clock.",
            ru: "Мы будем делать это завтра в 6 часов.",
            exampleFilter: {
                pronoun: "we",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "You will be doing it tomorrow at six o'clock.",
            ru: "Ты будешь делать это завтра в 6 часов(ед.ч.) ИЛИ Вы будете делать это завтра в 6 часов(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "He will be doing it tomorrow at six o'clock.",
            ru: "Он будет делать это завтра в 6 часов.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "They will be doing it tomorrow at six o'clock.",
            ru: "Они будут делать это завтра в 6 часов.",
            exampleFilter: {
                pronoun: "they",
                verb: "toDo",
                sentenceType: "statement"
            }
        },
        {
            en: "I will not be doing it tomorrow at six o'clock.",
            ru: "Я не буду делать это завтра в 6 часов.",
            exampleFilter: {
                pronoun: "I",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "We will not be doing it tomorrow at six o'clock.",
            ru: "Мы не будем делать это завтра в 6 часов.",
            exampleFilter: {
                pronoun: "we",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "You will not be doing it tomorrow at six o'clock.",
            ru: "Ты не будешь делать это завтра в 6 часов(ед.ч.) ИЛИ Вы не будете делать это завтра в 6 часов(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "He will not be doing it tomorrow at six o'clock.",
            ru: "Он не будет делать это завтра в 6 часов.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "They will not be doing it tomorrow at six o'clock.",
            ru: "Они не будут делать это завтра в 6 часов.",
            exampleFilter: {
                pronoun: "they",
                verb: "toDo",
                sentenceType: "negation"
            }
        },
        {
            en: "At 7 o'clock I will be having barbecue, you are welcome to join.",
            ru: "В 7 часов я буду на барбекю, присоединяйся.",
            exampleFilter: {
                pronoun: "I",
                verb: "toHave",
                sentenceType: "statement"
            }
        },
        {
            en: "At 7 o'clock we will be having barbecue, you are welcome to join.",
            ru: "В 7 часов мы будем на барбекю, присоединяйся.",
            exampleFilter: {
                pronoun: "we",
                verb: "toHave",
                sentenceType: "statement"
            }
        },
        {
            en: "At 7 o'clock you will be having barbecue, you are welcome to join.",
            ru: "В 7 часов ты будешь на барбекю, присоединяйся(ед.ч.) ИЛИ В 7 часов вы будете на барбекю, присоединяйтесь.(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toHave",
                sentenceType: "statement"
            }
        },
        {
            en: "At 7 o'clock he will be having barbecue, you are welcome to join.",
            ru: "В 7 часов он будет на барбекю, присоединяйся.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toHave",
                sentenceType: "statement"
            }
        },
        {
            en: "At 7 o'clock they will be having barbecue, you are welcome to join.",
            ru: "В 7 часов они будут на барбекю, присоединяйся.",
            exampleFilter: {
                pronoun: "they",
                verb: "toHave",
                sentenceType: "statement"
            }
        },
        {
            en: "At 7 o'clock I will not be having barbecue, you are welcome to join.",
            ru: "В 7 часов я не буду на барбекю, присоединяйся.",
            exampleFilter: {
                pronoun: "I",
                verb: "toHave",
                sentenceType: "negation"
            }
        },
        {
            en: "At 7 o'clock we will not be having barbecue, you are welcome to join.",
            ru: "В 7 часов мы не будем на барбекю, присоединяйся.",
            exampleFilter: {
                pronoun: "we",
                verb: "toHave",
                sentenceType: "negation"
            }
        },
        {
            en: "At 7 o'clock you will not be having barbecue, you are welcome to join.",
            ru: "В 7 часов ты не будешь на барбекю, присоединяйся(ед.ч.) ИЛИ В 7 часов вы не будете на барбекю, присоединяйтесь.",
            exampleFilter: {
                pronoun: "you",
                verb: "toHave",
                sentenceType: "negation"
            }
        },
        {
            en: "At 7 o'clock he will not be having barbecue, you are welcome to join.",
            ru: "В 7 часов он не будет на барбекю, присоединяйся.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toHave",
                sentenceType: "negation"
            }
        },
        {
            en: "At 7 o'clock they will not be having barbecue, you are welcome to join.",
            ru: "В 7 часов они не будут на барбекю, присоединяйся.",
            exampleFilter: {
                pronoun: "they",
                verb: "toHave",
                sentenceType: "negation"
            }
        },
        {
            en: "I will be being myself all day tomorrow.",
            ru: "Я буду собой завтра весь день.",
            exampleFilter: {
                pronoun: "I",
                verb: "toBo",
                sentenceType: "statement"
            }
        },
        {
            en: "We will be being ourselves all day tomorrow.",
            ru: "Мы будем собой завтра весь день.",
            exampleFilter: {
                pronoun: "we",
                verb: "toBo",
                sentenceType: "statement"
            }
        },
        {
            en: "You will be being yourself(yourselves) all day tomorrow.",
            ru: "Ты будешь собой завтра весь день(ед.ч.) ИЛИ Вы будете собой завтра весь день(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toBo",
                sentenceType: "statement"
            }
        },
        {
            en: "He will be being himself all day tomorrow.",
            ru: "Он будет собой завтра весь день.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toBo",
                sentenceType: "statement"
            }
        }

        ,
        {
            en: "They will be being themselves all day tomorrow.",
            ru: "Они будут собой завтра весь день.",
            exampleFilter: {
                pronoun: "they",
                verb: "toBo",
                sentenceType: "statement"
            }
        },
        {
            en: "I will not be being myself all day tomorrow.",
            ru: "Я не буду собой завтра весь день.",
            exampleFilter: {
                pronoun: "I",
                verb: "toBo",
                sentenceType: "negation"
            }
        },
        {
            en: "We will not be being ourselves all day tomorrow.",
            ru: "Мы не будем собой завтра весь день.",
            exampleFilter: {
                pronoun: "we",
                verb: "toBo",
                sentenceType: "negation"
            }
        },
        {
            en: "You will not be being yourself(yourselves) all day tomorrow.",
            ru: "Ты не будешь собой завтра весь день.(ед.ч.) ИЛИ Вы не будете собой завтра весь день(мн.ч.)",
            exampleFilter: {
                pronoun: "you",
                verb: "toBo",
                sentenceType: "negation"
            }
        },
        {
            en: "He will not be being himself all day tomorrow.",
            ru: "Он не будет собой завтра весь день.",
            exampleFilter: {
                pronoun: "heSheIt",
                verb: "toBo",
                sentenceType: "negation"
            }
        },
        {
            en: "They will not be being themselves all day tomorrow.",
            ru: "Они не будут собой завтра весь день.",
            exampleFilter: {
                pronoun: "they",
                verb: "toBo",
                sentenceType: "negation"
            }
        }
    ]
}

