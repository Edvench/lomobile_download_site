import {Component, OnDestroy, OnInit} from '@angular/core';
import { FileUploadService } from './services/file-upload.service';
import {Subscription} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'lomobsite';
  public sub: Subscription = new Subscription()
  public viewTemplate: string = 'main';
  public currentLink = location.href;
  public idKiosk = '';

  constructor(public uploadService:FileUploadService) { }


  ngOnInit(): void {
    this.getIdKiosk()
  }

  public changeView(route: string): void {
    this.viewTemplate = route;
    if (route === 'status') {
      this.upload()
    }
  }

  private getIdKiosk() {
    const indexElem = this.currentLink.lastIndexOf('/');
    this.idKiosk = this.currentLink.slice(indexElem + 1);
  }

  public upload():void{
    const uploadImage = this.uploadService.uploadPhoto(this.uploadService.gallery, this.idKiosk)
      .pipe(
        tap(() => this.viewTemplate = 'loading')
      )
      .subscribe(
        () => {
          this.viewTemplate = 'success'
          this.uploadService.gallery = [];
        },
        () => {
          this.viewTemplate = 'error'
        }
      );
    this.sub.add(uploadImage);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
