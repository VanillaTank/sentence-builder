import { ConditionCard } from "../card"

export const CONDITIONAL_CARDS: ConditionCard[] = [
    // TEST Active Future Simple regular statement
    {
        text: {
            en: '',
            ru: 'If your name is Kirill you are a good boy. '
        },
        theory: '',
        scheme: '',
        isTheoryShow: false,
        type: {
            ifClauseTime: 'present',
            mainClauseTime: 'present',
            ifClausePronoun: 'he, she, it',
            ifClauseSentenceType: 'statement',
            mainClauseSentenceType: 'statement',
            mainClausePronoun: 'you'
        }
    },

    {
        text: {
            en: '',
            ru: 'If I go to the party, I will be happy. '
        },
        theory: '',
        scheme: '',
        isTheoryShow: false,
        type: {
            ifClauseTime: 'furute',
            mainClauseTime: 'furute',
            ifClausePronoun: 'I',
            ifClauseSentenceType: 'statement',
            mainClauseSentenceType: 'statement',
            mainClausePronoun: 'I'
        }
    },
    {
        text: {
            en: '',
            ru: 'If your name is Kirill you are a good boy. '
        },
        theory: '',
        scheme: '',
        isTheoryShow: false,
        type: {
            ifClauseTime: 'past',
            mainClauseTime: 'past',
            ifClausePronoun: 'you',
            ifClauseSentenceType: 'negation',
            mainClauseSentenceType: 'negation',
            mainClausePronoun: 'you'
        }
    },
]
