import { Card } from "../../cardInterfaces"

export const PRESENT_CONTINUOUS: Card = {
    title: "ACTIVE PRESENT CONTINUOUS",
    mainFilter: 'general',
    cardFilter: [
        { title: 'time', value: 'present' },
        { title: 'timeType', value: 'continuous' },
        { title: 'voice', value: 'active' },
    ],
    theory: 'Настоящее длительное',
    schemas: ['Subject + am/is/are + Ving', 'Subject + am/is/are + not + Ving', 'Am/Is/Are + subject + Ving ?'],
    examples: [
        {
            en: 'I am working now.',
            ru: 'Я работаю сейчас.',
            exampleFilter: [
                { title: 'pronoun', value: 'I' },
                { title: 'verb', value: 'regular' },
                { title: 'sentenceType', value: 'statement' },
            ]
        },
        {
            en: 'We are working now.',
            ru: 'Мы работаем (сейчас).',
            exampleFilter: [
                { title: 'pronoun', value: 'we' },
                { title: 'verb', value: 'regular' },
                { title: 'sentenceType', value: 'statement' },
            ]
        },
        {
            en: 'You are working now.',
            ru: 'Ты работаешь сейчас. ИЛИ Вы работаете сейчас(во мн.ч.) ',
            exampleFilter: [
                { title: 'pronoun', value: 'you' },
                { title: 'verb', value: 'regular' },
                { title: 'sentenceType', value: 'statement' },
            ]
        }
    ]
}

export const PRESENT_CONTINUOUS_ = [

    {
        text: {
            en: 'You are working now.',
            ru: 'Ты работаешь сейчас. ИЛИ Вы работаете сейчас(во мн.ч.) '
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'You + V1',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'you',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He is working now.',
            ru: 'Он работает сейчас. '
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'He/she/it + is + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'he, she, it',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They are working now.',
            ru: 'Они работают сейчас. '
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'They + are + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'they',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },

    // Active Present continuous regular negation
    {
        text: {
            en: 'I am not working now.',
            ru: 'Я не работаю сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'I + am not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'I',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We are not working now.',
            ru: 'Мы не работаем сегодня.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'We + are not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'we',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You are not working now.',
            ru: 'Ты не работаешь сейчас. ИЛИ Вы работаете сейчас(во мн.ч.) '
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'You + are not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'you',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He is not working now.',
            ru: 'Он не работает сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'He/she/it + is not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'he, she, it',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They are not working now.',
            ru: 'Они не работают сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'They + are not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'they',
            verb: 'regular',
            sentenceType: 'negation',
        }
    },

    // Active Present continuous irregular statement
    {
        text: {
            en: 'I am going now.',
            ru: 'Я иду сейчас. '
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'I + am + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'I',
            verb: 'irregular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We are going now.',
            ru: 'Мы идем (сейчас).'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'We + are + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'we',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You are going now.',
            ru: 'Ты идешь сейчас(ед.ч.) ИЛИ Вы идете сейчас(мн.ч.)'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'You + are + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'you',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He is going now.',
            ru: 'Он идет сейчас. '
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'He/she/it + is + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'he, she, it',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They are going now.',
            ru: 'Они идут сейчас. '
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'They + are + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'they',
            verb: 'regular',
            sentenceType: 'statement',
        }
    },

    // Active Present continuous irregular negation
    {
        text: {
            en: 'I am not going now.',
            ru: 'Я не иду сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'I + am not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'I',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We are not going now.',
            ru: 'Мы не иду сейчас. '
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'We + are not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'we',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You are not going now.',
            ru: 'Ты не идешь сейчас(ед.ч.) ИЛИ Вы не идете сейчас(мн.ч.)'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'You + are not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'you',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He is not going now.',
            ru: 'Он не идет сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'He/she/it + is not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'he, she, it',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They are not going now.',
            ru: 'Они не идут сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'They + are not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'they',
            verb: 'irregular',
            sentenceType: 'negation',
        }
    },

    // Active Present continuous to do statement
    {
        text: {
            en: 'I am doing it now.',
            ru: 'Я делаю это это сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'I + am + doing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'I',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'We are doing it now.',
            ru: 'Мы делаем это сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'We + are + doing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'we',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'You are doing it now.',
            ru: 'Ты делаешь это сейчас(ед.ч.) ИЛИ Вы делаете это сейчас(мн.ч.)'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'You + are + doing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'you',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'He is doing it now.',
            ru: 'Он делает это сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'He/she/it + is + doing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'he, she, it',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: 'They are doing it now.',
            ru: 'Они делают каждый день. '
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'They + are + doing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'they',
            verb: 'to do',
            sentenceType: 'statement',
        }
    },

    // Active Present continuous to do negation
    {
        text: {
            en: 'I am not doing it now.',
            ru: 'Я не делают это сейчас. '
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'I + am not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'I',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'We are not doing it now.',
            ru: 'Мы не делаем это каждый день.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'We + are not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'we',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'You are not doing it now.',
            ru: 'Ты не делаешь это сейчас(ед.ч.) ИЛИ Вы делаете это сейчас(мн.ч.)'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'You + are not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'you',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'He is not doing it now.',
            ru: 'Он не делает это сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'He/she/it + is not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'he, she, it',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: 'They are not doing it now.',
            ru: 'Они не делают это сейчас.'
        },
        theory: 'Для действия в процессе, действие совершается в тот момент, когда о нем говорят.',
        scheme: 'They + are not + V1+ing',
        isTheoryShow: false,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'they',
            verb: 'to do',
            sentenceType: 'negation',
        }
    },

    // Active Present continuous to have statement
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to have невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'I',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to have невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'we',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to have невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'you',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to have невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'he, she, it',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to have невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'they',
            verb: 'to have',
            sentenceType: 'statement',
        }
    },

    // Active Present continuous to have negation
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to have невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'I',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to have невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'we',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to have невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'you',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to have невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'he, she, it',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to have невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'they',
            verb: 'to have',
            sentenceType: 'negation',
        }
    },

     // Active Present continuous to be statement
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to be невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'I',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to be невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'we',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to be невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'you',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to be невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'he, she, it',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to be невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'they',
            verb: 'to be',
            sentenceType: 'statement',
        }
    },

    // Active Present continuous to be negation
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to be невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'I',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to be невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'we',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to be невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'you',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to be невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'he, she, it',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },
    {
        text: {
            en: '',
            ru: ''
        },
        theory: 'to be невозможно употребить в длительной форме, и он не используется для образования Present Continuous, для него нужен Present Simple.',
        scheme: '',
        isTheoryShow: true,
        type: {
            voice: 'active',
            time: 'present',
            timeType: 'continuous',
            pronoun: 'they',
            verb: 'to be',
            sentenceType: 'negation',
        }
    },

]
