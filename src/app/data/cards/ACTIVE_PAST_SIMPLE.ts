import { Card } from '../../cardInterfaces';

export const ACTIVE_PAST_SIMPLE: Card = {
  title: 'ACTIVE PAST SIMPLE',
  mainFilter: 'general',
  cardFilter: {
    time: 'past',
    timeType: 'simple',
    voice: 'active',
  },
  theory: 'Для фактов и обычных повседневных дел. Маркеры: yesterday, then, when (I was young...), last week/month/year, three days ago, in 1997.',
  schemas: ['Subject + V1+ed/V2', 'Subject + did not + V1', 'Did + subject + V1 ?'],
  examples: [

    {
      en: 'I liked to play the piano.',
      ru: 'Мне нравилось играть на пианино.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'We listened to a very interesting lecture on English history yesterday.',
      ru: 'Мы слушали очень интересную лекцию по английской истории вчера.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'You faced him last year in the voyage.',
      ru: 'Ты столкнулся/ась с ним в прошлом году во время путешествия ИЛИ Вы столкнулись с ним в прошлом году во время путешествия .',
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'He studied physics in the university.',
      ru: 'Он изучал физику в университете.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'They played the violins really well and wanted to be a professional musicians.',
      ru: 'Они играли на скрипках действительно хорошо и хотели быть профессиональными музыкантами.',
      exampleFilter: {
        pronoun: 'trey',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'I didn\'t enter the room yesterday.',
      ru: 'Я не заходил вчера в комнату.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'We didn\'t learn English, when we were children.',
      ru: 'Мы не учили английский, когда были детьми.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'You didn\'t notice it at the last meeting.',
      ru: 'Ты не заметил этого на прошлой встрече ИЛИ Вы не заметили этого на прошлой встрече.',
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'She didn\'t play with me when we were in elementary school.',
      ru: 'Она не играла со мной, когда мы были в начальной школе.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'They didn\'t reach the sea in 1999.',
      ru: 'Они не достигли моря в 1999 году.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    // TODO regular questions here
    {
      en: 'I awoke early every day last month.',
      ru: 'Я рано вставал каждый день в прошлом месяце.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'We wrote a paper in mathematics last week.',
      ru: 'Мы написали контрольную работу по математике на прошлой неделе.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'You fell in love with her in 1988.',
      ru: 'Ты влюбился в нее в 1988 году ИЛИ Вы влюбились в нее в 1988 году(мн.ч.).',
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'Yesterday at the lesson of geography the teacher told us about famous travellers.',
      ru: 'Вчера на уроке географии учитель рассказал нам о знаменитых путешественниках.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'The workers (they) built two new schools last year.',
      ru: 'Рабочие построили две новые школы в прошлом году.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'I didn\'t feel well yesterday.',
      ru: 'Я не чувствовал себя хорошо вчера.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'We didn\'t cut these bushes last summer.',
      ru: 'Мы не стригли эти кусты прошлым летом.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'You didn\'t meet her at the concert.',
      ru: 'Ты не встретил ее на концерте ИЛИ Вы не встретили ее на концерте(мн.ч.).',
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'Mike didn\'t read the book.',
      ru: 'Майк не читал книгу.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'They didn\'t show me their new book.',
      ru: 'Они не показали мне свою книгу.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
    // TODO irregular questions here

    {
      en: 'I did my best to find a job after school, when I was 18.',
      ru: 'Я делал все возможное, чтобы получить работу после школы, когда мне было 18 лет.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'toDo',
        sentenceType: 'statement',
      },
    },
    {
      en: 'All of our team did the dishes at home yesterday.',
      ru: 'Вчера дома вся наша команда мыла посуду.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'toDo',
        sentenceType: 'statement',
      },
    },
    {
      en: 'You did this task last week.',
      ru: 'Ты делал эту задачу на прошлой неделе ИЛИ Вы делали эту задачу на прошлой неделе.',
      exampleFilter: {
        pronoun: 'you',
        verb: 'toDo',
        sentenceType: 'statement',
      },
    },
    {
      en: 'He did something important for his country in 1996.',
      ru: 'Он сделал что-то важное для своей страны в 1996 году.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'toDo',
        sentenceType: 'statement',
      },
    },
    {
      en: 'They did good to all the people in the city.',
      ru: 'Они делали добро для всех людей в городе.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'toDo',
        sentenceType: 'statement',
      },
    },
    {
      en: "I didn't do my homework when I was a schoolboy.",
      ru: 'Я не делал домашнее задание, когда был школьником.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'toDo',
        sentenceType: 'negation',
      },
    },
    {
      en: "We didn't do harm a single bird.",
      ru: 'Мы не причинили вреда ни одной птице.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'toDo',
        sentenceType: 'negation',
      },
    },
    {
      en: "You didn't do your job properly.",
      ru: 'Ты не выполнил свою работу правильно ИЛИ Вы не выполнили свою работу должным образом(мн.ч).',
      exampleFilter: {
        pronoun: 'you',
        verb: 'toDo',
        sentenceType: 'negation',
      },
    },
    {
      en: "Nancy didn't do her homework on time during school time.",
      ru: 'Ненси не делала домашнюю работу вовремя в школьное время.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'toDo',
        sentenceType: 'negation',
      },
    },
    {
      en: "The children didn't do anything last week.",
      ru: 'Дети ничего не делали на прошлой неделе.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'toDo',
        sentenceType: 'negation',
      },
    },

    // TODO to do questions here

    {
      en: 'I had a cheap car and an old house.',
      ru: 'У меня была дешевая машина и старый дом.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'toHave',
        sentenceType: 'statement',
      },
    },
    {
      en: 'We had a lesson of mathematics yesterday.',
      ru: 'У нас вчера был урок математики.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'toHave',
        sentenceType: 'statement',
      },
    },
    {
      en: 'You had coffee with her yesterday morning.',
      ru: 'Вы пили с ней кофе вчера утром.',
      exampleFilter: {
        pronoun: 'you',
        verb: 'toHave',
        sentenceType: 'statement',
      },
    },

    // TODO start here

    // TODO to have questions here

    {
      en: 'My uncle was a great specialist in English literature',
      ru: 'Мой дядя был большим специалистом в английской литературе.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'toBe',
        sentenceType: 'statement',
      },
    },
    {
      en: 'The weather was not fine that day.',
      ru: 'Погода не была хорошей в тот день.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'toBe',
        sentenceType: 'negation',
      },
    },

    // TODO to be questions here


    // ---------------------------------- OLD ----------------------------
    {
      en: 'I worked yesterday.',
      ru: 'Я вчера работал.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'We worked yesterday.',
      ru: 'Мы вчера работали.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'You worked yesterday.',
      ru: 'Ты работал вчера(в ед.ч.) ИЛИ Вы работали вчера(во мн.ч.)',
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'He worked yesterday.',
      ru: 'Он работал вчера.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'They worked yesterday.',
      ru: 'Они работали вчера.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'I did not work yesterday.',
      ru: 'Я не работал вчера.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'We did not work yesterday.',
      ru: 'Мы не работали вчера.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'You did not work yesterday.',
      ru: 'Ты не работал вчера(ед.ч.) ИЛИ Вы не работали вчера(мн.ч.)',
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'He did not work yesterday.',
      ru: 'Он не работал вчера.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'They did not work yesterday.',
      ru: 'Они не работали вчера.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'I went yesterday.',
      ru: 'Я ходил вчера.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'We went yesterday.',
      ru: 'Мы ходили вчера.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'You went yesterday.',
      ru: 'Ты ходил вчера(ед.ч.). ИЛИ Вы ходили вчера(мн.ч.)',
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'He went yesterday.',
      ru: 'Он ходил вчера.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'They went yesterday.',
      ru: 'Они ходили вчера.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      en: 'I did not go yesterday.',
      ru: 'Я не ходил вчера.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'We did not go yesterday.',
      ru: 'Мы не ходили вчера.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'You did not go yesterday.',
      ru: 'Ты не ходил вчера(ед.ч.) ИЛИ Вы ходили вчера(мн.ч.)',
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'He did not go yesterday.',
      ru: 'Он не ходил вчера.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'They did not go yesterday.',
      ru: 'Они не ходили вчера.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
    {
      en: 'I did it yesterday.',
      ru: 'Я делал это вчера.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'toDo',
        sentenceType: 'statement',
      },
    },
    {
      en: 'We did it yesterday.',
      ru: 'Мы делали это вчера.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'toDo',
        sentenceType: 'statement',
      },
    },
    {
      en: 'You did it yesterday.',
      ru: 'Ты делал это вчера(ед.ч.) ИЛИ Вы делали это вчера(мн.ч.)',
      exampleFilter: {
        pronoun: 'you',
        verb: 'toDo',
        sentenceType: 'statement',
      },
    },
    {
      en: 'He did it yesterday.',
      ru: 'Он делал это вчера.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'toDo',
        sentenceType: 'statement',
      },
    },
    {
      en: 'They did it yesterday.',
      ru: 'Они делали это вчера.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'toDo',
        sentenceType: 'statement',
      },
    },
    {
      en: 'I did not do it yesterday.',
      ru: 'Я не делал этого вчера.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'toDo',
        sentenceType: 'negation',
      },

    },
    {
      en: 'We did not do it yesterday.',
      ru: 'Мы делали этого вчера.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'toDo',
        sentenceType: 'negation',
      },
    },
    {
      en: 'You did not do it yesterday.',
      ru: 'Ты не делал этого вчера(ед.ч.) ИЛИ Вы не делали этого вчера(мн.ч.)',
      exampleFilter: {
        pronoun: 'you',
        verb: 'toDo',
        sentenceType: 'negation',
      },
    },
    {
      en: 'He did not do it yesterday.',
      ru: 'Он не делал этого вчера.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'toDo',
        sentenceType: 'negation',
      },
    },
    {
      en: 'They did not do it yesterday.',
      ru: 'Они не делали этого вчера.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'toDo',
        sentenceType: 'negation',
      },
    },
    {
      en: 'I had a cat.',
      ru: 'У меня была кошка.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'toHave',
        sentenceType: 'statement',
      },
    },
    {
      en: 'We had a cat.',
      ru: 'У нас была кошка.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'toHave',
        sentenceType: 'statement',
      },
    },
    {
      en: 'You had a cat.',
      ru: 'У тебя была кошка(ед.ч.) ИЛИ У вас была кошка(мн.ч.)',
      exampleFilter: {
        pronoun: 'you',
        verb: 'toHave',
        sentenceType: 'statement',
      },
    },
    {
      en: 'He had a cat.',
      ru: 'У него была кошка.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'toHave',
        sentenceType: 'statement',
      },
    },
    {
      en: 'They had a cat.',
      ru: 'У них была кошка.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'toHave',
        sentenceType: 'statement',
      },
    },
    {
      en: 'I did not have a cat.',
      ru: 'У меня не было кошки.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'toHave',
        sentenceType: 'negation',
      },
    },
    {
      en: 'We did not have a cat.',
      ru: 'У нас не было кошки',
      exampleFilter: {
        pronoun: 'we',
        verb: 'toHave',
        sentenceType: 'negation',
      },
    },
    {
      en: 'You did not have a cat.',
      ru: 'У тебя не было кошки(ед.ч.) ИЛИ У вас не было кошки(мн.ч.)',
      exampleFilter: {
        pronoun: 'you',
        verb: 'toHave',
        sentenceType: 'negation',
      },
    },
    {
      en: 'He did not have a cat.',
      ru: 'У него не было кошки.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'toHave',
        sentenceType: 'negation',
      },
    },
    {
      en: 'They did not have a cat.',
      ru: 'У них не было кошки.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'toHave',
        sentenceType: 'negation',
      },
    },
    {
      en: 'I was an engineer.',
      ru: 'Я был инженером.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'toBe',
        sentenceType: 'statement',
      },
    },
    {
      en: 'We were engineers.',
      ru: 'Мы были инженерами.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'toBe',
        sentenceType: 'statement',
      },
    },
    {
      en: 'You were an engineer/s.',
      ru: 'Ты был инженером(ед.ч.) ИЛИ Вы были инженерами(мн.ч.)',
      exampleFilter: {
        pronoun: 'you',
        verb: 'toBe',
        sentenceType: 'statement',
      },
    },
    {
      en: 'He was an engineer.',
      ru: 'Он был инженером.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'toBe',
        sentenceType: 'statement',
      },
    },
    {
      en: 'They were an engineers.',
      ru: 'Они были инженерами.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'toBe',
        sentenceType: 'statement',
      },
    },
    {
      en: 'I was not an engineer.',
      ru: 'Я не был инженером.',
      exampleFilter: {
        pronoun: 'I',
        verb: 'toBe',
        sentenceType: 'negation',
      },
    },
    {
      en: 'We were not engineers.',
      ru: 'Мы не были инженерами.',
      exampleFilter: {
        pronoun: 'we',
        verb: 'toBe',
        sentenceType: 'negation',
      },
    },
    {
      en: 'You were not an engineer/s.',
      ru: 'Ты не был инженером(ед.ч.) ИЛИ Вы не были инженерами(мн.ч.)',
      exampleFilter: {
        pronoun: 'you',
        verb: 'toBe',
        sentenceType: 'negation',
      },
    },
    {
      en: 'He was not an engineer.',
      ru: 'Он не был инженером.',
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'toBe',
        sentenceType: 'negation',
      },
    },
    {
      en: 'They were not an engineers.',
      ru: 'Они не были инженерами.',
      exampleFilter: {
        pronoun: 'they',
        verb: 'toBe',
        sentenceType: 'negation',
      },
    },
  ],
};
