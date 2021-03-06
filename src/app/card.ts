export interface Card {
  text: {
    en: string;
    ru: string;
  }
  theory?: string;
  scheme: string;
  type: GeneralCardType | ConditionCardType;
  isTheoryShow: boolean;
}

export interface GeneralCardType {
  [key: string]: any;

  voice: string
  time: string
  timeType: string
  pronoun: string
  verb: string
  sentenceType: string
}

export interface ConditionCardType {
  [key: string]: any;
  ifClauseTime: string
  ifClauseSentenceType: string
  ifClausePronoun: string
  mainClauseTime: string
  mainClauseSentenceType: string
  mainClausePronoun: string
}
