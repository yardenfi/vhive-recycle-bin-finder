import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ApiHandlerService } from '../services/api-handler.service';

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
  bins: any[] = [];
  constructor(private apiHandlerService: ApiHandlerService) {
    this.apiHandlerService.getRecyclingData().subscribe(bins => {
      this.bins = bins
      console.log(bins);
    });
  }
}
