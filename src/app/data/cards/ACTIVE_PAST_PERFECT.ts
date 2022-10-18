import { Card } from "../../cardInterfaces"

export const ACTIVE_PAST_PERFECT: Card = {
    title: "ACTIVE PAST PERFECT",
    mainFilter: 'general',
    cardFilter: {
        time: 'past',
        timeType: 'perfect',
        voice: 'active'
    },
    theory: 'Для фактов и обычных повседневных дел.',
    schemas: ['Subject + had + V3', 'Subject + had not + V3', 'Had + subject + V3 ?'],
    examples: [
        {
            en: "I had written this letter yesterday by six o'clock.",
            ru: "Я написал это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)",
            exampleFilter: {
              pronoun: "I",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "We had written this letter yesterday by six o'clock.",
            ru: "Мы написали это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)",
            exampleFilter: {
              pronoun: "we",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "You had written this letter yesterday by six o'clock.",
            ru: "Ты написал это письмо вчера к шести часам(ед.ч.) ИЛИ Вы написали это письмо вчера к шести(мн.ч.)(Не в шесть, а раньше, к шести!)",
            exampleFilter: {
              pronoun: "you",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "He had written this letter yesterday by six o'clock.",
            ru: "Он написал это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "They had written this letter yesterday by six o'clock.",
            ru: "Они написали это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)",
            exampleFilter: {
              pronoun: "they",
              verb: "irregular",
              sentenceType: "statement"
            }
          },
          {
            en: "The teacher understood that I had not finished the article.",
            ru: "Учитель понял, что я не закончил статью.",
            exampleFilter: {
              pronoun: "I",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "The teacher understood that we had not finished the article.",
            ru: "Учитель понял, что мы не закончили статью.",
            exampleFilter: {
              pronoun: "we",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "The teacher understood that you had not finished the article.",
            ru: "Учитель понял, что ты не закончил статью (ед.ч.) ИЛИ Учитель понял, что вы не закончили статью(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "The teacher understood that he had not finished the article.",
            ru: "Учитель понял, что он не закончил статью.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "The teacher understood that they had not finished the article.",
            ru: "Учитель понял, что они не закончили статью.",
            exampleFilter: {
              pronoun: "they",
              verb: "regular",
              sentenceType: "negation"
            }
          },
          {
            en: "The teacher understood that I had finished the article.",
            ru: "Учитель понял, что я закончил статью.",
            exampleFilter: {
              pronoun: "I",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "The teacher understood that I had finished the article.",
            ru: "Учитель понял, что мы закончили статью.",
            exampleFilter: {
              pronoun: "we",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "The teacher understood that you had finished the article.",
            ru: "Учитель понял, что ты закончил статью.(ед.ч.) ИЛИ Учитель понял, что вы закончили статью.(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "The teacher understood that he had finished the article.",
            ru: "Учитель понял, что он не закончил статью.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "The teacher understood that they had finished the article.",
            ru: "Учитель понял, что они не закончил статью.",
            exampleFilter: {
              pronoun: "they",
              verb: "regular",
              sentenceType: "statement"
            }
          },
          {
            en: "I had not written this letter yesterday by six o'clock.",
            ru: "Я не написал это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)",
            exampleFilter: {
              pronoun: "I",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "We had not written this letter yesterday by six o'clock.",
            ru: "Мы не написали это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)",
            exampleFilter: {
              pronoun: "we",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "You had not written this letter yesterday by six o'clock.",
            ru: "Ты не написал это письмо вчера к шести часам (ед.ч.) ИЛИ Вы не написали это письмо вчера к шести часам(Не в шесть, а раньше, к шести!) (мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "He had not written this letter yesterday by six o'clock.",
            ru: "Он не написал это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "They had not written this letter yesterday by six o'clock.",
            ru: "Они не написали это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)",
            exampleFilter: {
              pronoun: "they",
              verb: "irregular",
              sentenceType: "negation"
            }
          },
          {
            en: "When mother came home, I had done my homework.",
            ru: "Когда мама пришла домой, я (уже) сделал мою домашую работу.",
            exampleFilter: {
              pronoun: "I",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "When mother came home, we had done our homework.",
            ru: "Когда мама пришла домой, мы (уже) сделали нашу домашую работу",
            exampleFilter: {
              pronoun: "we",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "When mother came home, you had done your homework.",
            ru: "Когда мама пришла домой, ты (уже) сделал свою домашую работу(ед.ч.) ИЛИ Когда мама пришла домой, вы (уже) сделали свою домашую работу.(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "When mother came home, he had done his homework.",
            ru: "Когда мама пришла домой, он (уже) сделал свою домашую работу.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "When mother came home, they had done their homework.",
            ru: "Когда мама пришла домой, они (уже) сделали свою домашую работу.",
            exampleFilter: {
              pronoun: "they",
              verb: "toDo",
              sentenceType: "statement"
            }
          },
          {
            en: "When mother came home, I had not done my homework.",
            ru: "Когда мама пришла домой, я (еще) не закончил мою домашную работу.",
            exampleFilter: {
              pronoun: "I",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "When mother came home, we had not done our homework.",
            ru: "Когда мама пришла домой, мы (еще) не закончили нашу домашную работу.",
            exampleFilter: {
              pronoun: "we",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "When mother came home, you had not done your homework.",
            ru: "Когда мама пришла домой, ты (еще) не закончил твою домашную работу(ед.ч.) ИЛИ Когда мама пришла домой, вы (еще) не закончили вашу домашную работу(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "When mother came home, he had not done his homework.",
            ru: "Когда мама пришла домой, он (еще) не закончил свою домашную работу.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "When mother came home, they had not done their homework.",
            ru: "Когда мама пришла домой, они (еще) не закончили свою домашную работу.",
            exampleFilter: {
              pronoun: "they",
              verb: "toDo",
              sentenceType: "negation"
            }
          },
          {
            en: "When the boss came I had had a cup of coffee.",
            ru: "Когда босс вошел, я (уже) выпил кофе.",
            exampleFilter: {
              pronoun: "I",
              verb: "to had",
              sentenceType: "statement"
            }
          },
          {
            en: "When the boss came we had had a cup of coffee.",
            ru: "Когда босс вошел, мы (уже) выпили кофе.",
            exampleFilter: {
              pronoun: "we",
              verb: "to had",
              sentenceType: "statement"
            }
          },
          {
            en: "When the boss came you had had a cup of coffee.",
            ru: "Когда босс вошел, ты (уже) выпил кофе.(ед.ч.) ИЛИ Когда босс вошел, вы (уже) выпили кофе.(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "to had",
              sentenceType: "statement"
            }
          },
          {
            en: "When the boss came he had had a cup of coffee.",
            ru: "Когда босс вошел, он (уже) выпил кофе.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "to had",
              sentenceType: "statement"
            }
          },
          {
            en: "When the boss came they had had a cup of coffee.",
            ru: "Когда босс вошел, они (уже) выпили кофе.",
            exampleFilter: {
              pronoun: "they",
              verb: "to had",
              sentenceType: "statement"
            }
          },
          {
            en: "When the boss came I had not had a cup of coffee.",
            ru: "Когда босс вошел, я (еще) не выпил кофе.",
            exampleFilter: {
              pronoun: "I",
              verb: "to had",
              sentenceType: "negation"
            }
          },
          {
            en: "When the boss came we had not had a cup of coffee.",
            ru: "Когда босс вошел, мы (еще) не выпили кофе.",
            exampleFilter: {
              pronoun: "we",
              verb: "to had",
              sentenceType: "negation"
            }
          },
          {
            en: "When the boss came you had not had a cup of coffee.",
            ru: "Когда босс вошел, ты (еще) не выпил кофе(ед.ч.) ИЛИ Когда босс вошел, вы (еще) не выпили кофе(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "to had",
              sentenceType: "negation"
            }
          },
          {
            en: "When the boss came he had not had a cup of coffee.",
            ru: "Когда босс вошел, он (еще) не выпил кофе.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "to had",
              sentenceType: "negation"
            }
          },
          {
            en: "When the boss came they had not had a cup of coffee.",
            ru: "Когда босс вошел, они (еще) не выпили кофе.",
            exampleFilter: {
              pronoun: "they",
              verb: "to had",
              sentenceType: "negation"
            }
          },
          {
            en: "Before I became a manager I had been an engineer.",
            ru: "Перед тем, как я стал менеджером, я был инженером.",
            exampleFilter: {
              pronoun: "I",
              verb: "toBe",
              sentenceType: "statement"
            }
          },
          {
            en: "Before we became managers we had been engineers.",
            ru: "Перед тем, как мы стали менеджерами, мы были инженерами.",
            exampleFilter: {
              pronoun: "we",
              verb: "toBe",
              sentenceType: "statement"
            }
          },
          {
            en: "Before you became (a) manager(s) you had been (an) engineer(s).",
            ru: "Перед тем, как ты стал менеджером, ты был инженером(ед.ч.) ИЛИ Перед тем, как вы стали менеджерами, вы были инженерами(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toBe",
              sentenceType: "statement"
            }
          },
          {
            en: "Before he became a manager he had been an engineer.",
            ru: "Перед тем, как он стал менеджером, он был инженером.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toBe",
              sentenceType: "statement"
            }
          },
          {
            en: "Before they became managers they had been engineers.",
            ru: "Перед тем, как они стали менеджерами, они были инженерами",
            exampleFilter: {
              pronoun: "they",
              verb: "toBe",
              sentenceType: "statement"
            }
          },
          {
            en: "Before I became a manager I had not been an engineer.",
            ru: "Перед тем, как я стал менеджером, я не был инженером.",
            exampleFilter: {
              pronoun: "I",
              verb: "toBe",
              sentenceType: "negation"
            }
          },
          {
            en: "Before we became managers we had not been engineers.",
            ru: "Перед тем, как мы стали менеджерами, мы не были инженерами.",
            exampleFilter: {
              pronoun: "we",
              verb: "toBe",
              sentenceType: "negation"
            }
          },
          {
            en: "Before you became (a) manager(s) you had not been (an) engineer(s).",
            ru: "Перед тем, как ты стал менеджером, ты не был инженером(ед.ч.) ИЛИ Перед тем, как вы стали менеджерами, вы не был инженерами.(мн.ч.)",
            exampleFilter: {
              pronoun: "you",
              verb: "toBe",
              sentenceType: "negation"
            }
          },
          {
            en: "Before he became a manager he had not been an engineer.",
            ru: "Перед тем, как он стал менеджером, он не был инженером.",
            exampleFilter: {
              pronoun: "heSheIt",
              verb: "toBe",
              sentenceType: "negation"
            }
          },
          {
            en: "Before they became managers they had not been engineers.",
            ru: "Перед тем, как они стали менеджерами, они не были инженерами.",
            exampleFilter: {
              pronoun: "they",
              verb: "toBe",
              sentenceType: "negation"
            }
          }
    ]
}
