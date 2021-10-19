import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http:HttpClient) { }

  public getPhotoJSON():Observable<any>{
    return this.http.get<any>('./assets/mocks/photo.json')
  }
}
