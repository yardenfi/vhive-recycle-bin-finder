import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RecyclingSidebarComponent} from './filters/filters.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MapComponent} from './map/map.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecyclingSidebarComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
