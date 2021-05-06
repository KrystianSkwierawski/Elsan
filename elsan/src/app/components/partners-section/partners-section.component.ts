import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-partners-section',
  templateUrl: './partners-section.component.html',
  styleUrls: ['./partners-section.component.scss']
})
export class PartnersSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.partners').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }

}
