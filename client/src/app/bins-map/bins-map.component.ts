import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-bins-map',
  imports: [
    GoogleMap
  ],
  templateUrl: './bins-map.component.html',
  styleUrl: './bins-map.component.scss'
})
export class BinsMapComponent {
  options: google.maps.MapOptions = {
    center: {lat: 32.295716,
       lng: 34.860130},
    zoom: 13
  };
}
