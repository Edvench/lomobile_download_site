import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  public gallery:any;

  constructor(private httpClient:HttpClient) { }

  public uploadPhoto(photoBase64mas: any): Observable<any> {
    console.log(photoBase64mas)
    return this.httpClient.post(`api/client/source/selfie`,(photoBase64mas), {
      headers: {
        'Content-Type': 'application/json',
          }
    });
  }
}
