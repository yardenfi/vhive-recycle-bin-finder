import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RecyclingSidebarComponent} from './filters/filters.component';
import {GoogleMap} from '@angular/google-maps';
import {ApiHandlerService} from "./services/api-handler.service";
import {firstValueFrom} from "rxjs";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RecyclingSidebarComponent, GoogleMap],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    options: google.maps.MapOptions = {
        center: {lat: 40, lng: -20},
        zoom: 4
    };

    protected recycleBins = [];

    constructor(private apiHandler: ApiHandlerService) {
    }

    async onFiltersSubmit(selectedFilters: string[]) {
        this.recycleBins = await firstValueFrom(this.apiHandler.getRecyclingData(selectedFilters));
    }
}
