import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lomobsite';
  public loading:boolean = true;
  public gallery:boolean = false;
  public main:boolean = false;
  public error:boolean = false;
  public success:boolean = false;
}
