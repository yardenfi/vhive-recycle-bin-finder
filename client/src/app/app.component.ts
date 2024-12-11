import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RecyclingSidebarComponent} from './filters/filters.component';
import { GoogleMap } from '@angular/google-maps';
import { BinsMapComponent } from './bins-map/bins-map.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecyclingSidebarComponent, GoogleMap, BinsMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
