import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-partners-section',
  templateUrl: './partners-section.component.html',
  styleUrls: ['./partners-section.component.scss']
})
export class PartnersSectionComponent implements OnInit {

  slides = [
    { img: "http://www.elsan24.pl/img/autoryzacje/avent-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/finlux-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/hitachi-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/loewe-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/panasonic-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/pioneer.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/saeco-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/sencor-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/sharp-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/tcl-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/telefunken-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/thomson-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/toshiba-01.svg" },
    { img: "http://www.elsan24.pl/img/autoryzacje/vestel-01.svg" },
  ];
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 3, 
    autoplay: true, 
    autoplaySpeed: 5000,
    speed: 2000,
    prevArrow: false,
    nextArrow: false
  };


  constructor() { }

  ngOnInit(): void {
    // $('.partners').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    // });
  }

}
