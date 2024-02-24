import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommerceService {
  private apiUrl = '/api/commerce/random_commerce?size=100';

  constructor(private http: HttpClient) {}

  getCommerces(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
