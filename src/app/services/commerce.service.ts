import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommerceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCommerces(): Observable<any[]> {
    const headers = new HttpHeaders({
      'x-requested-with': 'XMLHttpRequest',
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
