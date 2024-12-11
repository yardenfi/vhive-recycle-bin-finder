import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiHandlerService {
    private apiUrl = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) {
    }

    getRecyclingData(selectedFilters: string[]) {
        return this.httpClient.get<[]>(`${this.apiUrl}/recycle-bins?types[]=${selectedFilters.join(',')}`);
    }
}
