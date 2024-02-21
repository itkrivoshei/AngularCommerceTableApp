import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommerceService {
  constructor(private http: HttpClient) {}

  getRandomCommerces(): Observable<any> {
    return this.http.get(
      'https://random-data-api.com/api/commerce/random_commerce?size=100'
    );
  }
}
