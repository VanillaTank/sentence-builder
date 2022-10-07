import { Card } from "../../cardInterfaces"

export const PRESENT_PERFECT: Card[] = [
    // Active Present perfect irregular statement
    {
        text: {
            en: 'I have written this letter.',
            ru: 'Я написал это письмо. (уже)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'I + have +  + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We have written this letter. (уже)',
            ru: 'Мы написали это письмо.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'We + have + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You have written this letter.',
            ru: 'Ты написал это письмо(ед.ч.) ИЛИ Вы написали это письмо(мн.ч.) (уже)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'You + have + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He has written this letter.',
            ru: 'Он написал это письмо. (уже)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'He/she/it + has + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They have written this letter.',
            ru: 'Они написали это письмо. (уже)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'They + have + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },

    // Active Present perfect regular negation
    {
        text: {
            en: 'I have not opened a box of chocolates.',
            ru: 'Я (еще) не открыл коробку конфект.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'I + have not + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We have not opened a box of chocolates.',
            ru: 'Мы (еще) не открыли коробку конфет.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'We + have not + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You have not opened a box of chocolates.',
            ru: 'Ты (еще) не открыл коробку конфет(ед.ч.) ИЛИ Вы (еще) не открыли коробку конфет(мн.ч.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'You + have not + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He has not opened a box of chocolates.',
            ru: 'Он (еще) не открыл коробку конфет.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'He/she/it + has not + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They have not opened a box of chocolates.',
            ru: 'Они (еще) не открыли коробку конфет.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'They + have not + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },

    // Active Present perfect regular statement
    {
        text: {
            en: 'I have opened a box of chocolates.',
            ru: 'Я (уже) открыл коробку конфет.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'I + have + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We have opened a box of chocolates.',
            ru: 'Мы (уже) открыли коробку конфет.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'We + have + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You have opened a box of chocolates.',
            ru: 'Ты (уже) открыл коробку конфет(ед.ч.) ИЛИ Вы (уже) открыли коробку конфет(мн.ч.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'You + have + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He has opened a box of chocolates.',
            ru: 'Он (уже) открыл коробку конфет.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'He/she/it + has + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They have opened a box of chocolates.',
            ru: 'Они (уже) открыли коробку конфет.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'They + have + V1+ed',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },

    // Active Present perfect irregular negation
    {
        text: {
            en: 'I have not written this letter.',
            ru: 'Я (еще) не написал это письмо.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'I + have not + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We have not written this letter.',
            ru: 'Мы (еще) не написали это письмо.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'We + have not + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You have not written this letter.',
            ru: 'Ты (еще) не написал это письмо(ед.ч.) ИЛИ Вы (еще) не написали это письмо(мн.ч.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'You + have not +  V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He have not written this letter.',
            ru: 'Он (еще) не написал это письмо.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'He/she/it + has not + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They have not written this letter.',
            ru: 'Они (еще) не написали это письмо.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'They + have not + V3',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },

    // Active Present perfect to do statement
    {
        text: {
            en: 'I have done my homework.',
            ru: 'Я (уже) сделал свою домашную работу.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'I + have + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We have done our homework.',
            ru: 'Мы (уже) сделали свою домашную работу.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'We + have + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You have done your homework.',
            ru: 'Ты (уже) сделал свою домашную работу(ед.ч) ИЛИ Вы (уже) сделали свою домашную работу (мн.ч.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'You + have + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He has done his homework.',
            ru: 'Он (уже) сделал свою домашную работу.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'He/she/it + has + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They have done their homework.',
            ru: 'Они (уже) сделали свою домашную работу.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'They + have + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },

    // Active Present perfect to do negation
    {
        text: {
            en: 'I have not done my homework.',
            ru: 'Я (еще) не сделал свою домашную работу.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'I + have not + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We have not done our homework.',
            ru: 'Мы (еще) не сделали свою домашную работу.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'We + have not + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You have not done your homework.',
            ru: 'Ты (еще) не сделал свою домашную работу(ед.ч) ИЛИ Вы (еще) не сделали свою домашную работу (мн.ч.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'You + have not + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He has not done his homework.',
            ru: 'Он (еще) не сделал свою домашную работу.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'He/she/it + has not + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They have not done their homework.',
            ru: 'Они (еще) не сделали свою домашную работу.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'They + have not + done(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },

    // Active Present perfect to have statement
    {
        text: {
            en: 'I have had a cup of coffee.',
            ru: 'Я (уже) выпил кофе.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'I + have + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We have had a cup of coffee.',
            ru: 'Мы (уже) выпили кофе.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'We + have + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You have had a cup of coffee.',
            ru: 'Ты (уже) выпил кофе(ед.ч.) ИЛИ Вы (уже) выпили кофе(мн.ч.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'You + have + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He has had a cup of coffee.',
            ru: 'Он (уже) выпил кофе.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'He/she/it + has + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They have had a cup of coffee.',
            ru: 'Они (уже) выпили кофе.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'They + have + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },

    // Active Present perfect to have negation
    {
        text: {
            en: 'I have not had a cup of coffee.',
            ru: 'Я (еще) не выпил кофе.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'I + have not + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We have not had a cup of coffee.',
            ru: 'Мы (еще) не выпили кофе.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'We + have not + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You have not had a cup of coffee.',
            ru: 'Ты (еще) не выпил кофе(ед.ч.) ИЛИ Вы (еще) не выпили кофе(мн.ч.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'You + have not + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He has not had a cup of coffee.',
            ru: 'Он (еще) не выпил кофе.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'He/she/it + has not + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They have not had a cup of coffee.',
            ru: 'Они (еще) не выпили кофе.'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'They + have not + had(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },


    // Active Present perfect to be statement
    {
        text: {
            en: 'I have been an engineer for two years.',
            ru: 'Я работаю инженером в течение двух лет. (Период времени)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'I + have + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We have been an engineer for two years.',
            ru: 'Мы работаем инженерами в течение двух лет. (Период времени)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'We + have + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You have been (an) engineer(s) for two years.',
            ru: 'Ты работаешь инженером в течение двух лет(Период времени) (ед.ч.) ИЛИ Вы работаете инженерами в течение двух лет. (Период времени)(мн.ч.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'You + have + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He has been an engineer for two years.',
            ru: 'Он работает инженером в течение двух лет. (Период времени)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'He/she/it + has + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They have been an engineer for two years.',
            ru: 'Они работают инженерами в течение двух лет. (Период времени)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'They + have + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },

    // Active Present perfect to be negation
    {
        text: {
            en: 'I have not been an engineer for two years.',
            ru: 'Я не работаю инженером в течение двух лет. (Период времени)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'I + have not + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'I',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We have not been an engineer for two years.',
            ru: 'Мы не работаем инженерами в течение двух лет. (Период времени)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'We + have not + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'we',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You have not been (an) engineer(s) for two years.',
            ru: 'Ты не работаешь инженером в течение двух лет(Период времени) (ед.ч.) ИЛИ Вы не работаете инженерами в течение двух лет. (Период времени)(мн.ч.)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'You + have not + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'you',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He has not been an engineer for two years.',
            ru: 'Он не работает инженером в течение двух лет. (Период времени)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'He/she/it + has not + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'he, she, it',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They have not been an engineer for two years.',
            ru: 'Они не работают инженерами в течение двух лет. (Период времени)'
        },
        theory: 'Действие завершилось к моменту речи. Частые признаки: already, not yet, just, ever, never. Отличие от Past Simple - завершенность действия, как "Он носил" и "Он принес". Используют для ситуаций и действий, которые начались в прошлом и до сих пор идут (Я написал 2 страницы этим утром(и может быть напишу еще в течение этого же утра)) и когда важен только результат (I have eaten - Я поел(результат - не голодный)).',
        scheme: 'They + have not + been(V3)',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'perfect',
            pronoun: 'they',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
   
]