import { Component, OnInit } from '@angular/core';
// import { google } from '@google/maps';
// import {} from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'app-google-map-section',
  templateUrl: './google-map-section.component.html',
  styleUrls: ['./google-map-section.component.scss']
})
export class GoogleMapSectionComponent implements OnInit {

  map: any;
  elsanLatLng = {lat: 54.4692373, lng: 17.0197254};

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapElement = document.getElementById("map");

    if (mapElement) {
      this.map = new google.maps.Map(mapElement, {
        center: this.elsanLatLng,
        zoom: 17,
        scrollwheel: false,
      });

      const marker = new google.maps.Marker({
        position: this.elsanLatLng,
        map: this.map,
        title: 'ELSAN'
      });
    }
  }
}
