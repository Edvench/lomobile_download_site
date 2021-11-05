import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public gallery: any = [ ];

  constructor(private mocks: MockService,
              private uploadService:FileUploadService) { }

  ngOnInit(): void {
    console.log(this.gallery)
  }

  public deleteEl(slide: any, i: any): any {
    this.gallery.splice(i, 1);
    this.uploadService.gallery = this.gallery
  }

  public onFileChanged(event: any) {
    const endpoint = '././assets/img/';
    let file: any;
    let obj: any;
    let pathImage: any;
    const fileList: FileList = event.target.files || [];
    let number = fileList.length
    console.log(number)
    for (let i = 0; i < number; i++) {
      file = event.target.files[i]
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        pathImage = reader.result

        obj = {
          pathImage
        }
        // console.log(obj);
        this.gallery.push(pathImage)
        console.log(this.gallery)
        this.uploadService.gallery = this.gallery
      };

    }
    console.log(this.gallery)
  }

}
