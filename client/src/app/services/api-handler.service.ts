import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiHandlerService {
  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  getRecyclingData() {
    return this.httpClient.get(`${this.apiUrl}/recycle-bins`);
  }
}
