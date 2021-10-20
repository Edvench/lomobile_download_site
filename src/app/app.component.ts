import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lomobsite';
  public main: boolean = false;
  public loading: boolean = false;
  public gallery: boolean = false;
  public error: boolean = false;
  public success: boolean = false;

  ngOnInit(): void {
    this.main = true;
  }

  public navigate(rout: string): void {
    switch (rout) {
      case 'gallery':
        this.main = false;
        this.gallery = true;
        break;

        case 'status':
        this.gallery = false;
        this.loading = true 
        setTimeout(() => {
          this.loading = false;
          this.success = true;
          setTimeout(() => {
            this.success = false;
            this.main = true
          }, 3000);
        }, 3000);
        

        break;

      default:
        break;
    }
  }
}
