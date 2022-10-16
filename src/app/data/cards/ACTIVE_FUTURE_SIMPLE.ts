import { Card } from "../../cardInterfaces"

export const ACTIVE_FUTURE_SIMPLE: Card = {
    title: "ACTIVE FUTURE SIMPLE",
    mainFilter: 'general',
    cardFilter: {
        time: 'future',
        timeType: 'simple',
        voice: 'active'
    },
    theory: 'Для фактов и обычных повседневных дел.',
    schemas: ['Subject + will + V1', 'Subject + will not + V1', 'Will + subject + V1 ?'],
    examples: [
        {
            en: "I will work tomorrow.",
            ru: "Я буду работать завтра.",
            exampleFilter: {
              pronoun: "I",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "We will work tomorrow.",
            ru: "Мы будем работать завтра.",
            exampleFilter: {
              pronoun: "we",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "You will work tomorrow.",
            ru: "Ты будешь работать завтра(ед.ч.) ИЛИ Вы будете работать завтра(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "He will work tomorrow",
            ru: "Он будет работать завтра.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "They will work tomorrow.",
            ru: "Они будут работать завтра.",
            exampleFilter: {
              pronoun: "they",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "I will not work tomorrow.",
            ru: "Я буду работать завтра.",
            exampleFilter: {
              pronoun: "I",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "We will not work tomorrow.",
            ru: "Мы не будем работать завтра.",
            exampleFilter: {
              pronoun: "we",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "You will not work tomorrow.",
            ru: "Ты не будешь работать завтра(ед.ч.) ИЛИ Вы не будете работать завтра(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "He will not work tomorrow.",
            ru: "Он не будет работать завтра.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "They will not work tomorrow.",
            ru: "Они не будут работать завтра.",
            exampleFilter: {
              pronoun: "they",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "I will go tomorrow.",
            ru: "Я пойду завтра.",
            exampleFilter: {
              pronoun: "I",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "We will go tomorrow.",
            ru: "Мы пойдем завтра.",
            exampleFilter: {
              pronoun: "we",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "You will go tomorrow.",
            ru: "Ты пойдешь завтра(ед.ч.) ИЛИ Вы пойдете завтра(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "He will go tomorrow.",
            ru: "Он пойдет завтра.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "They will go tomorrow.",
            ru: "Они пойдут завтра.",
            exampleFilter: {
              pronoun: "they",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "I will not go tomorrow.",
            ru: "Я не пойдут завтра.",
            exampleFilter: {
              pronoun: "I",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "We will not go tomorrow.",
            ru: "Мы не пойдем завтра.",
            exampleFilter: {
              pronoun: "we",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "You will not go tomorrow.",
            ru: "Ты не пойдешь завтра(ед.ч.) ИЛИ Вы не пойдете завтра(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "He will not go tomorrow.",
            ru: "Он не пойдет завтра.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "They will not go tomorrow.",
            ru: "Они не пойдут завтра.",
            exampleFilter: {
              pronoun: "they",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "I will do it tomorrow.",
            ru: "Я буду делать это завтра.",
            exampleFilter: {
              pronoun: "I",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "We will do it tomorrow.",
            ru: "Мы будем делать это завтра.",
            exampleFilter: {
              pronoun: "we",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "You will do it tomorrow.",
            ru: "Ты будешь делать это завтра(ед.ч.) ИЛИ Вы будете делать это завтра(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "He will do it tomorrow.",
            ru: "Он будет делать это завтра.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "They will do it tomorrow.",
            ru: "Они будут делать это завтра.",
            exampleFilter: {
              pronoun: "they",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "I will not do it tomorrow.",
            ru: "Я не буду делать этого завтра.",
            exampleFilter: {
              pronoun: "I",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "We will not do it tomorrow.",
            ru: "Мы будем делать этого завтра.",
            exampleFilter: {
              pronoun: "we",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "You will not do it tomorrow.",
            ru: "Ты не будешь делать это завтра(ед.ч.) ИЛИ Вы не будете делать это завтра(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "He will not do it tomorrow.",
            ru: "Он не будет делать это завтра.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "They will not do it tomorrow.",
            ru: "Они не будут делать это завтра.",
            exampleFilter: {
              pronoun: "they",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "I will have a lesson tomorrow.",
            ru: "У меня будет урок завтра.",
            exampleFilter: {
              pronoun: "I",
              verb: "toHave",
              sentenceType: "statement"
            }
          },
          {
            en: "We will have a lesson tomorrow.",
            ru: "У нас будет урок завтра.",
            exampleFilter: {
              pronoun: "we",
              verb: "toHave",
              sentenceType: "statement"
            }
          },
          {
            en: "You will have a lesson tomorrow.",
            ru: "У тебя будет урок завтра(ед.ч.) ИЛИ У вас будет урок завтра(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toHave",
              sentenceType: "statement"
            }
          },
          {
            en: "He will have a lesson tomorrow.",
            ru: "У него будет урок завтра.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toHave",
              sentenceType: "statement"
            }
          },
          {
            en: "They will have a lesson tomorrow.",
            ru: "У них будет урок завтра.",
            exampleFilter: {
              pronoun: "they",
              verb: "toHave",
              sentenceType: "statement"
            }
          },
          {
            en: "I will not have a lesson tomorrow.",
            ru: "У меня не будет урока завтра.",
            exampleFilter: {
              pronoun: "I",
              verb: "toHave",
              sentenceType: "negation"
            }
          },
          {
            en: "We will not have a lesson tomorrow.",
            ru: "У нас не будет урока завтра",
            exampleFilter: {
              pronoun: "we",
              verb: "toHave",
              sentenceType: "negation"
            }
          },
          {
            en: "You will not have a lesson tomorrow.",
            ru: "У тебя не будет урока завтра(ед.ч.) ИЛИ У вас не будет урока завтра(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toHave",
              sentenceType: "negation"
            }
          },
          {
            en: "He will not have a lesson tomorrow.",
            ru: "У него не будет урока завтра.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toHave",
              sentenceType: "negation"
            }
          },
          {
            en: "They will not have a lesson tomorrow.",
            ru: "У них не будет урока завтра.",
            exampleFilter: {
              pronoun: "they",
              verb: "toHave",
              sentenceType: "negation"
            }
          },
          {
            en: "I will be a student next year.",
            ru: "Я буду студентом в следующем году.",
            exampleFilter: {
              pronoun: "I",
              verb: "toBo",
              sentenceType: "statement"
            }
          },
          {
            en: "We will be students next year.",
            ru: "Мы будем студентами в следующем году.",
            exampleFilter: {
              pronoun: "we",
              verb: "toBo",
              sentenceType: "statement"
            }
          },
          {
            en: "You will be student(s) next year",
            ru: "Ты будешь студентом в следующем году(ед.ч.) ИЛИ Вы будете студентами в следующем году(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toBo",
              sentenceType: "statement"
            }
          },
          {
            en: "He will be a student next year.",
            ru: "Он будет студентом в следующем году.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toBo",
              sentenceType: "statement"
            }
          },
          {
            en: "They will be students next year.",
            ru: "Они будут студентами в следующем году.",
            exampleFilter: {
              pronoun: "they",
              verb: "toBo",
              sentenceType: "statement"
            }
          },
          {
            en: "I will not be a student next year.",
            ru: "Я не будет студентом в следующем году.",
            exampleFilter: {
              pronoun: "I",
              verb: "toBo",
              sentenceType: "negation"
            }
          },
          {
            en: "We will not be students next year",
            ru: "Мы не будем студентами в следующем году.",
            exampleFilter: {
              pronoun: "we",
              verb: "toBo",
              sentenceType: "negation"
            }
          },
          {
            en: "You will not be a student(s) next year.",
            ru: "Ты не будешь студентом в следующем году(ед.ч.) ИЛИ Вы не будете студентами в следующем году(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toBo",
              sentenceType: "negation"
            }
          },
          {
            en: "He will not be a student next year.",
            ru: "Он не будет студентом в следующем году.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toBo",
              sentenceType: "negation"
            }
          },
          {
            en: "They will not be students next year.",
            ru: "Они не будут студентами в следующем году.",
            exampleFilter: {
              pronoun: "they",
              verb: "toBo",
              sentenceType: "negation"
            }
          }
    ]
}
