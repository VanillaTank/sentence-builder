import { Card } from "../../cardInterfaces"

export const ACTIVE_PRESENT_PERFECT: Card = {
    title: "ACTIVE PRESENT PERFECT",
    mainFilter: 'general',
    cardFilter: {
        time: 'present',
        timeType: 'perfect',
        voice: 'active'
    },
    theory: 'Для фактов и обычных повседневных дел.',
    schemas: ['Subject + have/has + V3', 'Subject + have/has not + V3', 'Have/has + subject + V3 ?'],
    examples: [
        {
            en: "I have written this letter.",
            ru: "Я написал это письмо. (уже)",
            exampleFilter: {
              pronoun: "I",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "We have written this letter. (уже)",
            ru: "Мы написали это письмо.",
            exampleFilter: {
              pronoun: "we",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "You have written this letter.",
            ru: "Ты написал это письмо(ед.ч.) ИЛИ Вы написали это письмо(мн.ч.) (уже)",
            exampleFilter: {
              pronoun: "you",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "He has written this letter.",
            ru: "Он написал это письмо. (уже)",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "They have written this letter.",
            ru: "Они написали это письмо. (уже)",
            exampleFilter: {
              pronoun: "they",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "I have not opened a box of chocolates.",
            ru: "Я (еще) не открыл коробку конфект.",
            exampleFilter: {
              pronoun: "I",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "We have not opened a box of chocolates.",
            ru: "Мы (еще) не открыли коробку конфет.",
            exampleFilter: {
              pronoun: "we",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "You have not opened a box of chocolates.",
            ru: "Ты (еще) не открыл коробку конфет(ед.ч.) ИЛИ Вы (еще) не открыли коробку конфет(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "He has not opened a box of chocolates.",
            ru: "Он (еще) не открыл коробку конфет.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "They have not opened a box of chocolates.",
            ru: "Они (еще) не открыли коробку конфет.",
            exampleFilter: {
              pronoun: "they",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "I have opened a box of chocolates.",
            ru: "Я (уже) открыл коробку конфет.",
            exampleFilter: {
              pronoun: "I",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "We have opened a box of chocolates.",
            ru: "Мы (уже) открыли коробку конфет.",
            exampleFilter: {
              pronoun: "we",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "You have opened a box of chocolates.",
            ru: "Ты (уже) открыл коробку конфет(ед.ч.) ИЛИ Вы (уже) открыли коробку конфет(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "He has opened a box of chocolates.",
            ru: "Он (уже) открыл коробку конфет.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "They have opened a box of chocolates.",
            ru: "Они (уже) открыли коробку конфет.",
            exampleFilter: {
              pronoun: "they",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "I have not written this letter.",
            ru: "Я (еще) не написал это письмо.",
            exampleFilter: {
              pronoun: "I",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "We have not written this letter.",
            ru: "Мы (еще) не написали это письмо.",
            exampleFilter: {
              pronoun: "we",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "You have not written this letter.",
            ru: "Ты (еще) не написал это письмо(ед.ч.) ИЛИ Вы (еще) не написали это письмо(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "He have not written this letter.",
            ru: "Он (еще) не написал это письмо.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "They have not written this letter.",
            ru: "Они (еще) не написали это письмо.",
            exampleFilter: {
              pronoun: "they",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "I have done my homework.",
            ru: "Я (уже) сделал свою домашную работу.)",
            exampleFilter: {
              pronoun: "I",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "We have done our homework.",
            ru: "Мы (уже) сделали свою домашную работу.",
            exampleFilter: {
              pronoun: "we",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "You have done your homework.",
            ru: "Ты (уже) сделал свою домашную работу(ед.ч) ИЛИ Вы (уже) сделали свою домашную работу (мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "He has done his homework.",
            ru: "Он (уже) сделал свою домашную работу.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "They have done their homework.",
            ru: "Они (уже) сделали свою домашную работу.",
            exampleFilter: {
              pronoun: "they",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "I have not done my homework.",
            ru: "Я (еще) не сделал свою домашную работу.)",
            exampleFilter: {
              pronoun: "I",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "We have not done our homework.",
            ru: "Мы (еще) не сделали свою домашную работу.",
            exampleFilter: {
              pronoun: "we",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "You have not done your homework.",
            ru: "Ты (еще) не сделал свою домашную работу(ед.ч) ИЛИ Вы (еще) не сделали свою домашную работу (мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "He has not done his homework.",
            ru: "Он (еще) не сделал свою домашную работу.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "They have not done their homework.",
            ru: "Они (еще) не сделали свою домашную работу.",
            exampleFilter: {
              pronoun: "they",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "I have had a cup of coffee.",
            ru: "Я (уже) выпил кофе.",
            exampleFilter: {
              pronoun: "I",
              verb: "toHave",
              sentenceType: "statement"
            }
          },
          {
            en: "We have had a cup of coffee.",
            ru: "Мы (уже) выпили кофе.",
            exampleFilter: {
              pronoun: "we",
              verb: "toHave",
              sentenceType: "statement"
            }
          },
          {
            en: "You have had a cup of coffee.",
            ru: "Ты (уже) выпил кофе(ед.ч.) ИЛИ Вы (уже) выпили кофе(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toHave",
              sentenceType: "statement"
            }
          },
          {
            en: "He has had a cup of coffee.",
            ru: "Он (уже) выпил кофе.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toHave",
              sentenceType: "statement"
            }
          },
          {
            en: "They have had a cup of coffee.",
            ru: "Они (уже) выпили кофе.",
            exampleFilter: {
              pronoun: "they",
              verb: "toHave",
              sentenceType: "statement"
            }
          },
          {
            en: "I have not had a cup of coffee.",
            ru: "Я (еще) не выпил кофе.",
            exampleFilter: {
              pronoun: "I",
              verb: "toHave",
              sentenceType: "negation"
            }
          },
          {
            en: "We have not had a cup of coffee.",
            ru: "Мы (еще) не выпили кофе.",
            exampleFilter: {
              pronoun: "we",
              verb: "toHave",
              sentenceType: "negation"
            }
          },
          {
            en: "You have not had a cup of coffee.",
            ru: "Ты (еще) не выпил кофе(ед.ч.) ИЛИ Вы (еще) не выпили кофе(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toHave",
              sentenceType: "negation"
            }
          },
          {
            en: "He has not had a cup of coffee.",
            ru: "Он (еще) не выпил кофе.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toHave",
              sentenceType: "negation"
            }
          },
          {
            en: "They have not had a cup of coffee.",
            ru: "Они (еще) не выпили кофе.",
            exampleFilter: {
              pronoun: "they",
              verb: "toHave",
              sentenceType: "negation"
            }
          },
          {
            en: "I have been an engineer for two years.",
            ru: "Я работаю инженером в течение двух лет. (Период времени)",
            exampleFilter: {
              pronoun: "I",
              verb: "toBe",
              sentenceType: "statement"
            }
          },
          {
            en: "We have been an engineer for two years.",
            ru: "Мы работаем инженерами в течение двух лет. (Период времени)",
            exampleFilter: {
              pronoun: "we",
              verb: "toBe",
              sentenceType: "statement"
            }
          },
          {
            en: "You have been (an) engineer(s) for two years.",
            ru: "Ты работаешь инженером в течение двух лет(Период времени) (ед.ч.) ИЛИ Вы работаете инженерами в течение двух лет. (Период времени)(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toBe",
              sentenceType: "statement"
            }
          },
          {
            en: "He has been an engineer for two years.",
            ru: "Он работает инженером в течение двух лет. (Период времени)",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toBe",
              sentenceType: "statement"
            }
          },
          {
            en: "They have been an engineer for two years.",
            ru: "Они работают инженерами в течение двух лет. (Период времени)",
            exampleFilter: {
              pronoun: "they",
              verb: "toBe",
              sentenceType: "statement"
            }
          },
          {
            en: "I have not been an engineer for two years.",
            ru: "Я не работаю инженером в течение двух лет. (Период времени)",
            exampleFilter: {
              pronoun: "I",
              verb: "toBe",
              sentenceType: "negation"
            }
          },
          {
            en: "We have not been an engineer for two years.",
            ru: "Мы не работаем инженерами в течение двух лет. (Период времени)",
            exampleFilter: {
              pronoun: "we",
              verb: "toBe",
              sentenceType: "negation"
            }
          },
          {
            en: "You have not been (an) engineer(s) for two years.",
            ru: "Ты не работаешь инженером в течение двух лет(Период времени) (ед.ч.) ИЛИ Вы не работаете инженерами в течение двух лет. (Период времени)(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toBe",
              sentenceType: "negation"
            }
          },
          {
            en: "He has not been an engineer for two years.",
            ru: "Он не работает инженером в течение двух лет. (Период времени)",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toBe",
              sentenceType: "negation"
            }
          },
          {
            en: "They have not been an engineer for two years.",
            ru: "Они не работают инженерами в течение двух лет. (Период времени)",
            exampleFilter: {
              pronoun: "they",
              verb: "toBe",
              sentenceType: "negation"
            }
          }
    ]
}
