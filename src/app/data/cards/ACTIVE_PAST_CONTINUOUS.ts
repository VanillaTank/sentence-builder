import { Card } from "../../cardInterfaces"

export const ACTIVE_PAST_CONTINUOUS: Card = {
    title: "ACTIVE PAST CONTINUOUS",
    mainFilter: 'general',
    cardFilter: {
        time: 'past',
        timeType: 'continuous',
        voice: 'active'
    },
    theory: 'Прошедшее длительное',
    schemas: ['Subject + was/were + Ving', 'Subject + was/were not + Ving', 'Was/were + subject + Ving ?'],
    examples: [
        {
            en: "I was working at three o'clock yesterday.",
            ru: "Вчера в 3 часа я работал.",
            exampleFilter: {
              pronoun: "I",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "We were working, when he came.",
            ru: "Мы работали (в тот момент), когда он пришел.",
            exampleFilter: {
              pronoun: "we",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "You were working from 5 till 6 yesterday.",
            ru: "Ты/вы работали вчера (в период) c 5 до 6.",
            exampleFilter: {
              pronoun: "you",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "He was working the whole evening yesterday.",
            ru: "Вчера он работал весь вечер (весь вечер - это период).",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "They were working at 5 o'clock yesterday.",
            ru: "Вчера в пять часов они работали.",
            exampleFilter: {
              pronoun: "they",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "I wasn't working at three o'clock yesterday.",
            ru: "Вчера в 3 часа я не работал.",
            exampleFilter: {
              pronoun: "I",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "We weren't working, when he came.",
            ru: "Мы не работали (в тот момент), когда он пришел.",
            exampleFilter: {
              pronoun: "we",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "You weren't working from 5 till 6 yesterday.",
            ru: "Ты/вы не работали вчера (в период) c 5 до 6.",
            exampleFilter: {
              pronoun: "you",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "He wasn't working the whole evening yesterday.",
            ru: "Вчера он не работал весь вечер (весь вечер - это период).",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "They weren't working at 5 o'clock yesterday.",
            ru: "Вчера в пять часов они не работали.",
            exampleFilter: {
              pronoun: "they",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "I was sleeping at three o'clock yesterday.",
            ru: "Вчера в 3 часа я спал.",
            exampleFilter: {
              pronoun: "I",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "We were sleeping, when he came.",
            ru: "Мы спали (в тот момент), когда он пришел.",
            exampleFilter: {
              pronoun: "we",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "You were sleeping from 5 till 6 yesterday.",
            ru: "Ты/вы спали вчера (в период) c 5 до 6.",
            exampleFilter: {
              pronoun: "you",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "He was sleeping the whole evening yesterday.",
            ru: "Вчера он спал весь вечер (весь вечер - это период).",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "They were sleeping at 5 o'clock yesterday.",
            ru: "Вчера в пять часов они спали.",
            exampleFilter: {
              pronoun: "they",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "I wasn't sleeping during the drive home.",
            ru: "Я не спал в то время, когда ехал домой.",
            exampleFilter: {
              pronoun: "I",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "We weren't sleeping during the drive home.",
            ru: "Мы не спали, пока ехали домой.",
            exampleFilter: {
              pronoun: "we",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "You weren't sleeping during the drive home.",
            ru: "Ты/вы не спали, пока ехали домой.",
            exampleFilter: {
              pronoun: "you",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "He wasn't sleeping during the drive home.",
            ru: "Вчера он не спал, пока ехал домой.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "They weren't sleeping during the drive home.",
            ru: "Они не спали, в то время, когда ехали домой.",
            exampleFilter: {
              pronoun: "they",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "I was doing my homework from 7 till 9 yesterday.",
            ru: "Я делал свою домашную работу вчера c 7 до 9.",
            exampleFilter: {
              pronoun: "I",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "We were doing our homework the whole evening.",
            ru: "Мы делали нашу домашнюю работу весь вечер.",
            exampleFilter: {
              pronoun: "we",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "You were doing your homework when I fell asleep.",
            ru: "Ты/вы делали свою домашнюю работу, когда я заснул.",
            exampleFilter: {
              pronoun: "you",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "He was doing his homework when his mother came in the room.",
            ru: "Он делал свою домашнюю работу, когда его мама зашла в комнату.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "They were doing their homework at nine o'clock yesterday.",
            ru: "Они делали свою домашнюю работу вчера в 9 часов",
            exampleFilter: {
              pronoun: "they",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "I wasn't doing my homework from 7 till 9 yesterday.",
            ru: "Я не делал свою домашную работу вчера c 7 до 9.",
            exampleFilter: {
              pronoun: "I",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "We weren't doing our homework the whole evening.",
            ru: "Мы не делали нашу домашнюю работу весь вечер.",
            exampleFilter: {
              pronoun: "we",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "You weren't doing your homework when I fell asleep.",
            ru: "Ты/вы не делали свою домашнюю работу, когда я заснул.",
            exampleFilter: {
              pronoun: "you",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "He wasn't doing his homework when his mother came in the room.",
            ru: "Он не делал свою домашнюю работу, когда его мама зашла в комнату.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "They weren't doing their homework at nine o'clock yesterday.",
            ru: "Они делали свою домашнюю работу вчера в 9 часов",
            exampleFilter: {
              pronoun: "they",
              verb: "toDo",
              sentenceType: "negation"
            }
          }
    ]
}
