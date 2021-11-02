import { Component } from '@angular/core';
import { FileUploadService } from './services/file-upload.service';

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
  public padding:boolean = false;

  constructor(private uploadService:FileUploadService) { }

  ngOnInit(): void {
    this.main = true;
  }

  public navigate(rout: string): void {
    switch (rout) {
      case 'gallery':
        this.main = false;
        this.gallery = true;
        this.padding = true;
        break;

        case 'status':
        this.gallery = false;
        this.padding = false;
        this.loading = true;
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

  public upload():void{
    this.uploadService.uploadPhoto(this.uploadService.gallery).subscribe(()=>{});
    console.log(12425454345)
  }
}
