import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-partners-section',
  templateUrl: './partners-section.component.html',
  styleUrls: ['./partners-section.component.scss']
})
export class PartnersSectionComponent implements OnInit {

  basePartnersPath: string = "../../../assets/img/partners/";

  slides = [
    { img: "avent-01.svg" },
    { img: "finlux-01.svg" },
    { img: "hitachi-01.svg" },
    { img: "jvc-01.svg" },
    { img: "loewe-01.svg" },
    { img: "panasonic-01.svg" },
    { img: "pioneer.svg" },
    { img: "saeco-01.svg" },
    { img: "sencor-01.svg" },
    { img: "sharp-01.svg" },
    { img: "tcl-01.svg" },
    { img: "telefunken-01.svg" },
    { img: "thomson-01.svg" },
    { img: "toshiba-01.svg" },
    { img: "vestel-01.svg" },
  ];
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 3, 
    autoplay: true, 
    autoplaySpeed: 2500,
    speed: 2000,
    prevArrow: false,
    nextArrow: false
  };


  constructor() { }

  ngOnInit(): void {

  }

}
