import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent implements OnInit {

  faqs: Faq[] = [
    {
      question: "Czy jesteście serwisem sony/philips?",
      answer: `Tak, jesteśmy jedynym autoryzowanym serwisem Sony i Philips w Słupsku.`,
      isSelected: false
    },
    {
      question: "Ile kosztuje diagnoza?",
      answer: `Diagnoza kosztuje 30zł, w przypadku gdy klient będzie chciał naprawiać
      sprzętpłaci tylko za koszty naprawy, w przypadku braku możliwości
      naprawy lub odmowy klient musi zapłacić koszty diagnozy.`,
      isSelected: false
    },
    {
      question: "Czy naprawiamy sprzęty fotograficzne?",
      answer: `Jesteśmy punktem kolekcjonerskim dla e-serwisów, cały sprzęt
      fotograficzny wysyłamy do nich.`,
      isSelected: false
    },
    {
      question: "Ile trwa naprawa/diagnoza?",
      answer: `Wszystko zależy od zdiagnozowanej usterki, staramy się wszystko
      naprawiać do 2 tygodni lecz wszystko zależy od tego ile będziemy czekać
      na części o ile takie będą potrzebne, jeżeli chodzi o diagnozę, staramy
      sie diagnozować do tygodnia.`,
      isSelected: false
    },
    {
      question: "Co głównie naprawiamy?",
      answer: `Naprawiamy dużo sprzętu RTV/AGD takie jak TV, głośniki, pc, drukarki,
      ekspresy, laptopy, telefony, iphony, konsole.`,
      isSelected: false
    },
    {
      question: "Nie działa mi to i to, ile będzie kosztowała naprawa?",
      answer: `Bez wstępnej diagnozy nie możemy powiedzieć ile naprawa sprzętu by
      kosztowała gdyż nie mamy pewności co może być uszkodzone. Po diagnoze
      robimy wycene ile by kosztowała naprawa i kontaktujemy się z klientem.`,
      isSelected: false
    }
  ]


  constructor() { }

  ngOnInit(): void {

  }

  toggleAnswer(index: number){
    this.faqs[index].isSelected = !this.faqs[index].isSelected;
  }

}
