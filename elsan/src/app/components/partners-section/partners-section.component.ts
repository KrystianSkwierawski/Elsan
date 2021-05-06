import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-partners-section',
  templateUrl: './partners-section.component.html',
  styleUrls: ['./partners-section.component.scss']
})
export class PartnersSectionComponent implements OnInit {

  slides = [
    { img: "../../../assets/img/partners/Philips_logo_new.svg" },
    { img: "../../../assets/img/partners/Philips_logo_new.svg" },
    { img: "../../../assets/img/partners/Philips_logo_new.svg" },
    { img: "../../../assets/img/partners/Philips_logo_new.svg" },
    { img: "../../../assets/img/partners/Philips_logo_new.svg" }
  ];
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 3, 
    autoplay: true, 
    speed: 1500, 
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
