import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetStatisticsService 
{

  private baseUrl = 'http://localhost:2907';

  constructor(private http: HttpClient) { }

  getStats(): Observable<any> 
  {
    return this.http.get(`${this.baseUrl}/getstats`);
  }
}