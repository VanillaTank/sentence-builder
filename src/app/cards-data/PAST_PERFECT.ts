import { Card } from "../card"

export const PAST_PERFECT: Card[] = [
    // Active past perfect irregular statement
    {
        text: {
            en: 'I had written this letter yesterday by six o\'clock.',
            ru: 'Я написал это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'I + had +  + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We had written this letter yesterday by six o\'clock.',
            ru: 'Мы написали это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'We + had + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You had written this letter yesterday by six o\'clock.',
            ru: 'Ты написал это письмо вчера к шести часам(ед.ч.) ИЛИ Вы написали это письмо вчера к шести(мн.ч.)(Не в шесть, а раньше, к шести!)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'You + had + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He had written this letter yesterday by six o\'clock.',
            ru: 'Он написал это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'He/she/it + has + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They had written this letter yesterday by six o\'clock.',
            ru: 'Они написали это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'They + had + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },

    // Active past perfect regular negation
    {
        text: {
            en: 'The teacher understood that I had not finished the article.',
            ru: 'Учитель понял, что я не закончил статью.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'I + had not + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'The teacher understood that we had not finished the article.',
            ru: 'Учитель понял, что мы не закончили статью.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'We + had not + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'The teacher understood that you had not finished the article.',
            ru: 'Учитель понял, что ты не закончил статью (ед.ч.) ИЛИ Учитель понял, что вы не закончили статью(мн.ч.)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'You + had not + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'The teacher understood that he had not finished the article.',
            ru: 'Учитель понял, что он не закончил статью.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'He/she/it + has not + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'The teacher understood that they had not finished the article.',
            ru: 'Учитель понял, что они не закончили статью.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'They + had not + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },

    // Active past perfect regular statement
    {
        text: {
            en: 'The teacher understood that I had finished the article.',
            ru: 'Учитель понял, что я закончил статью.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'I + had + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'The teacher understood that I had finished the article.',
            ru: 'Учитель понял, что мы закончили статью.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'We + had + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'The teacher understood that you had finished the article.',
            ru: 'Учитель понял, что ты закончил статью.(ед.ч.) ИЛИ Учитель понял, что вы закончили статью.(мн.ч.)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'You + had + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'The teacher understood that he had finished the article.',
            ru: 'Учитель понял, что он не закончил статью.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'He/she/it + has + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'The teacher understood that they had finished the article.',
            ru: 'Учитель понял, что они не закончил статью.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'They + had + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },

    // Active past perfect irregular negation
    {
        text: {
            en: 'I had not written this letter yesterday by six o\'clock.',
            ru: 'Я не написал это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'I + had not + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We had not written this letter yesterday by six o\'clock.',
            ru: 'Мы не написали это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'We + had not + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You had not written this letter yesterday by six o\'clock.',
            ru: 'Ты не написал это письмо вчера к шести часам (ед.ч.) ИЛИ Вы не написали это письмо вчера к шести часам(Не в шесть, а раньше, к шести!) (мн.ч.)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'You + had not +  V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He had not written this letter yesterday by six o\'clock.',
            ru: 'Он не написал это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'He/she/it + has not + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They had not written this letter yesterday by six o\'clock.',
            ru: 'Они не написали это письмо вчера к шести часам. (Не в шесть, а раньше, к шести!)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'They + had not + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },

    // Active past perfect to do statement
    {
        text: {
            en: 'When mother came home, I had done my homework.',
            ru: 'Когда мама пришла домой, я (уже) сделал мою домашую работу.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'I + had + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'When mother came home, we had done our homework.',
            ru: 'Когда мама пришла домой, мы (уже) сделали нашу домашую работу'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'We + had + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'When mother came home, you had done your homework.',
            ru: 'Когда мама пришла домой, ты (уже) сделал свою домашую работу(ед.ч.) ИЛИ Когда мама пришла домой, вы (уже) сделали свою домашую работу.(мн.ч.)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'You + had + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'When mother came home, he had done his homework.',
            ru: 'Когда мама пришла домой, он (уже) сделал свою домашую работу.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'He/she/it + has + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'When mother came home, they had done their homework.',
            ru: 'Когда мама пришла домой, они (уже) сделали свою домашую работу.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'They + had + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },

    // Active past perfect to do negation
    {
        text: {
            en: 'When mother came home, I had not done my homework.',
            ru: 'Когда мама пришла домой, я (еще) не закончил мою домашную работу.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'I + had not + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'When mother came home, we had not done our homework.',
            ru: 'Когда мама пришла домой, мы (еще) не закончили нашу домашную работу.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'We + had not + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'When mother came home, you had not done your homework.',
            ru: 'Когда мама пришла домой, ты (еще) не закончил твою домашную работу(ед.ч.) ИЛИ Когда мама пришла домой, вы (еще) не закончили вашу домашную работу(мн.ч.)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'You + had not + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'When mother came home, he had not done his homework.',
            ru: 'Когда мама пришла домой, он (еще) не закончил свою домашную работу.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'He/she/it + has not + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'When mother came home, they had not done their homework.',
            ru: 'Когда мама пришла домой, они (еще) не закончили свою домашную работу.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'They + had not + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },

    // Active past perfect to had statement
    {
        text: {
            en: 'When the boss came I had had a cup of coffee.',
            ru: 'Когда босс вошел, я (уже) выпил кофе.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'I + had + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to had',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'When the boss came we had had a cup of coffee.',
            ru: 'Когда босс вошел, мы (уже) выпили кофе.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'We + had + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to had',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'When the boss came you had had a cup of coffee.',
            ru: 'Когда босс вошел, ты (уже) выпил кофе.(ед.ч.) ИЛИ Когда босс вошел, вы (уже) выпили кофе.(мн.ч.)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'You + had + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to had',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'When the boss came he had had a cup of coffee.',
            ru: 'Когда босс вошел, он (уже) выпил кофе.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'He/she/it + has + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to had',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'When the boss came they had had a cup of coffee.',
            ru: 'Когда босс вошел, они (уже) выпили кофе.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'They + had + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to had',
            sentenceType: 'statement',
        }
    },

    // Active past perfect to had negation
    {
        text: {
            en: 'When the boss came I had not had a cup of coffee.',
            ru: 'Когда босс вошел, я (еще) не выпил кофе.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'I + had not + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to had',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'When the boss came we had not had a cup of coffee.',
            ru: 'Когда босс вошел, мы (еще) не выпили кофе.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'We + had not + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to had',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'When the boss came you had not had a cup of coffee.',
            ru: 'Когда босс вошел, ты (еще) не выпил кофе(ед.ч.) ИЛИ Когда босс вошел, вы (еще) не выпили кофе(мн.ч.)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'You + had not + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to had',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'When the boss came he had not had a cup of coffee.',
            ru: 'Когда босс вошел, он (еще) не выпил кофе.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'He/she/it + has not + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to had',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'When the boss came they had not had a cup of coffee.',
            ru: 'Когда босс вошел, они (еще) не выпили кофе.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'They + had not + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to had',
            sentenceType: 'negation',
        }
    },


    // Active past perfect to be statement
    {
        text: {
            en: 'Before I became a manager I had been an engineer.',
            ru: 'Перед тем, как я стал менеджером, я был инженером.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'I + had + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'Before we became managers we had been engineers.',
            ru: 'Перед тем, как мы стали менеджерами, мы были инженерами.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'We + had + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'Before you became (a) manager(s) you had been (an) engineer(s).',
            ru: 'Перед тем, как ты стал менеджером, ты был инженером(ед.ч.) ИЛИ Перед тем, как вы стали менеджерами, вы были инженерами(мн.ч.)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'You + had + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'Before he became a manager he had been an engineer.',
            ru: 'Перед тем, как он стал менеджером, он был инженером.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'He/she/it + has + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'Before they became managers they had been engineers.',
            ru: 'Перед тем, как они стали менеджерами, они были инженерами'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'They + had + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },

    // Active past perfect to be negation
    {
        text: {
            en: 'Before I became a manager I had not been an engineer.',
            ru: 'Перед тем, как я стал менеджером, я не был инженером.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'I + had not + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'Before we became managers we had not been engineers.',
            ru: 'Перед тем, как мы стали менеджерами, мы не были инженерами.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'We + had not + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'Before you became (a) manager(s) you had not been (an) engineer(s).',
            ru: 'Перед тем, как ты стал менеджером, ты не был инженером(ед.ч.) ИЛИ Перед тем, как вы стали менеджерами, вы не был инженерами.(мн.ч.)'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'You + had not + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'Before he became a manager he had not been an engineer.',
            ru: 'Перед тем, как он стал менеджером, он не был инженером.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'He/she/it + has not + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'Before they became managers they had not been engineers.',
            ru: 'Перед тем, как они стали менеджерами, они не были инженерами.'
        },
        theory: 'Действие завершилось перед моментом или действием в прошлом. Часто используется для объясений или уточнений типа Он читал книгу, которую взял вчера (He was reading a book that he bought yesterday). То есть дейстивие "читал" произошло позже, чем действие "купил".',
        scheme: 'They + had not + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'past',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },

]