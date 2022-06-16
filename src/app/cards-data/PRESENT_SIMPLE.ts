import { Card } from "../card"

export const PRESENT_SIMPLE: Card[] = [
    // Active Present Simple regular statement
    {
        text: {
            en: 'I work every day.',
            ru: 'Я работаю каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'I + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We work every day.',
            ru: 'Мы работаем каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'We + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You work every day.',
            ru: 'Ты работаешь каждый день. ИЛИ Вы работаете каждый день(во мн.ч.) (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'You + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He works every day.',
            ru: 'Он работает каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'He/she/it + V1+s/es',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They work every day.',
            ru: 'Они работают каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'They + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },

    // Active Present Simple regular negation
    {
        text: {
            en: 'I do not work every day.',
            ru: 'Я не работаю каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'I + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We do not work every day.',
            ru: 'Мы не работаем каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'We + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You do not work every day.',
            ru: 'Ты не работаешь каждый день. ИЛИ Вы работаете каждый день(во мн.ч.) (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'You + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He does not work every day.',
            ru: 'Он не работает каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'He/she/it + does not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They do not work every day.',
            ru: 'Они не работают каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'They + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },

    // Active Present Simple irregular statement
    {
        text: {
            en: 'I go every day.',
            ru: 'Я хожу каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'I + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We go every day.',
            ru: 'Мы ходим каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'We + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You go every day.',
            ru: 'Ты ходишь каждый день. ИЛИ Вы ходите каждый день(во мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'You + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He goes every day.',
            ru: 'Он ходит каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'He/she/it + V1+s/es',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They go every day.',
            ru: 'Они ходят каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'They + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },

    // Active Present Simple irregular negation
    {
        text: {
            en: 'I do not go every day.',
            ru: 'Я не хожу каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'I + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We do not go every day.',
            ru: 'Мы не ходмм каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'We + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You do not go every day.',
            ru: 'Ты не ходишь каждый день(в ед.ч.) ИЛИ Вы ходите каждый день(во мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'You + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He does not go every day.',
            ru: 'Он не ходит каждый день.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'He/she/it + does not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They do not go every day.',
            ru: 'Они не ходят каждый день.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'They + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },

    // Active Present Simple to do statement
    {
        text: {
            en: 'I do it every day.',
            ru: 'Я делаю это каждый день.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'I + do',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We do it every day.',
            ru: 'Мы делаем это каждый день.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'We + do',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You do it every day.',
            ru: 'Ты делаешь это каждый день. ИЛИ Вы делаете это каждый день(во мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'You + do',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He does it every day.',
            ru: 'Он делает это каждый день.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'He/she/it + does',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They do it every day.',
            ru: 'Они делают каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'They + do',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },

    // Active Present Simple to do negation
    {
        text: {
            en: 'I do not do it every day.',
            ru: 'Я не делают это каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'I + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We do not do it every day.',
            ru: 'Мы не делаем это каждый день. (Обычно)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'We + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You do not do it every day.',
            ru: 'Ты не делаешь это каждый день(в ед.ч.) ИЛИ Вы делаете это каждый день(во мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'You + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He does not do it every day.',
            ru: 'Он не делает это каждый день.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'He/she/it + does not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They do not do it every day.',
            ru: 'Они не делают это каждый день.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'They + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },

    // Active Present Simple to have statement
    {
        text: {
            en: 'I have a cat.',
            ru: 'У меня есть кошка.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'I + have',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We have a cat.',
            ru: 'У нас есть кошка'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'We + have',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You have a cat..',
            ru: 'У тебя есть кошка(в ед.ч.)  ИЛИ У вас есть кошка(во мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'You + have',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He has a cat.',
            ru: 'У него есть кошка'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'He/she/it + has',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They have a cat.',
            ru: 'У них есть кошка.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'They + have',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },

    // Active Present Simple to have negation
    {
        text: {
            en: 'I do not have a cat.',
            ru: 'У меня нет кошки.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'I + do not + have',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We do not have a cat.',
            ru: 'У нас нет кошки'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'We + do not + have',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You do not have a cat.',
            ru: 'У тебя нет кошки(в ед.ч.) ИЛИ У вас нет кошки(во мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'You + do not + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He does not have a cat.',
            ru: 'У него нет кошки.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'He/she/it + does not + have',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They do not have a cat.',
            ru: 'У них нет кошки.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'They + do not + have',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },

     // Active Present Simple to be statement
    {
        text: {
            en: 'I am an engineer.',
            ru: 'Я - инженер.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'I + am',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We are engineers.',
            ru: 'Мы инженеры.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'We + are',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You are an engineer/s.',
            ru: 'Ты - инженер(в ед.ч.)  ИЛИ Вы - инженеры(во мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'You + are',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He is an engineer.',
            ru: 'Он - инженер.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'He/she/it + is',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They are an engineers.',
            ru: 'Они - инженеры.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'They + are',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },

    // Active Present Simple to be negation
    {
        text: {
            en: 'I am not an engineer.',
            ru: 'Я не инженер.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'I + am not',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'I',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We are not engineers.',
            ru: 'Мы не инженеры.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'We + are not',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'we',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You are not an engineer/s.',
            ru: 'Ты не инженер(в ед.ч.)  ИЛИ Вы не инженеры(во мн.ч.)'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'You + are not',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'you',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He is not an engineer.',
            ru: 'Он не инженер.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'He/she/it + is not',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'he, she, it',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They are not an engineers.',
            ru: 'Они не инженеры.'
        },
        theory: 'Для фактов и обычных повседневных дел.',
        schema: 'They + are not',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'simple',
            pronoun: 'they',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
   
]