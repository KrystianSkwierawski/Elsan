import { Component, AfterViewInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-google-map-section',
  templateUrl: './google-map-section.component.html',
  styleUrls: ['./google-map-section.component.scss']
})
export class GoogleMapSectionComponent implements AfterViewInit {

  map: any;
  elsanLatLng = {lat: 54.4692373, lng: 17.0197254};

  constructor() { }

  async ngAfterViewInit() {
    await this.initMap();
    this.setElsanMarker();
  }

  async initMap() {
    const mapElement = document.getElementById("map");

    if (mapElement) {
      this.map = new google.maps.Map(mapElement, {
        center: this.elsanLatLng,
        zoom: 17,
        scrollwheel: false,
      });
    }
  }

  async setElsanMarker() {
    new google.maps.Marker({
      position: this.elsanLatLng,
      map: this.map,
      title: 'ELSAN'
    });
  }
}
