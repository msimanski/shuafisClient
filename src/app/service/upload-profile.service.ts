import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadProfileService {

  private baseUrl = 'http://localhost:2907';

  constructor(private http: HttpClient) { }

  upload(
    leftLittleFile: File,
    leftRingFile: File,
    leftMiddleFile: File,
    leftIndexFile: File,
    leftThumbFile: File,
    rightLittleFile: File,
    rightRingFile: File,
    rightMiddleFile: File,
    rightIndexFile: File,
    rightThumbFile: File,
    name: any,
    address: any,
    city: any,
    state: any,
    zip: any,
    phone: any,
    ssid: any,
    dob: any
    ): Observable<HttpEvent<any>> 
  {
    const formData: FormData = new FormData();

    formData.append('leftLittleFile', leftLittleFile);
    formData.append('leftRingFile', leftRingFile);
    formData.append('leftMiddleFile', leftMiddleFile);
    formData.append('leftIndexFile', leftIndexFile);
    formData.append('leftThumbFile', leftThumbFile);
    formData.append('rightLittleFile', rightLittleFile);
    formData.append('rightRingFile', rightRingFile);
    formData.append('rightMiddleFile', rightMiddleFile);
    formData.append('rightIndexFile', rightIndexFile);
    formData.append('rightThumbFile', rightThumbFile);
    formData.append('name', name);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zip', zip);
    formData.append('phone', phone);
    formData.append('ssid', ssid);
    formData.append('dob', dob);

    const req = new HttpRequest('POST', `${this.baseUrl}/uploadprofile`, formData, 
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
