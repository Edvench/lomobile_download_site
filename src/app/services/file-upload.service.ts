import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  public gallery = [];

  constructor(private httpClient:HttpClient) { }

  public uploadPhoto(photoBase64mas: string[], identity: string): Observable<any> {
    return this.httpClient.post(`/download/images/${identity}`,(photoBase64mas), {
      headers: {
        'Content-Type': 'application/json',
          }
    });
  }
}
