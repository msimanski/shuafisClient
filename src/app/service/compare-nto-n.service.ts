import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompareNToNService 
{

  private baseUrl = 'http://localhost:2907';

  constructor(private http: HttpClient) { }

  upload(file1: File, file2: File): Observable<HttpEvent<any>> 
  {
    const formData: FormData = new FormData();

    formData.append('file1', file1);
    formData.append('file2', file2);

    const req = new HttpRequest('POST', `${this.baseUrl}/comparenton`, formData, 
    {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> 
  {
    return this.http.get(`${this.baseUrl}/files`);
  }
}