import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

    Cards: any[] = [
        {
            title: 'ACTIVE PAST SIMPLE',
            theory: 'Для фактов и обычных повседневных дел в прошлом.',
            schemas: ['Subject + V2/Ved', 'Subject + did not + V1', 'Did + subject + V1?'],
            examples: [
                {en: 'I was here last year.', ru: 'Я был здесь в прошлом году.'},
                {en: 'We were here last year.', ru: 'Мы были здесь в прошлом году.'}
            ]
        },
        {
            title: 'ACTIVE PRESENT SIMPLE',
            theory: 'Для фактов и обычных повседневных дел.',
            schemas: ['Subject + V1', 'Subject + do/does not + V1', 'Do/does + subject + V1?'],
            examples: []
        },
        {
            title: 'ACTIVE FUTURE SIMPLE',
            theory: 'Для фактов и обычных повседневных дел.',
            schemas:['Subject + will + V1', 'Subject + will not + V1', 'Will + subject + V1?'],
            examples: []
        },
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
