import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public gallery: any = [
    {
      path: '././assets/img/photo_1.jpg'
    },
    {
      path: '././assets/img/photo_2.jpg'
    },
    {
      path: '././assets/img/photo_3.jpg'
    },
    {
      path: '././assets/img/photo_4.jpg'
    },
    {
      path: '././assets/img/photo_5.jpg'
    },
    {
      path: '././assets/img/photo_6.jpg'
    },
    {
      path: '././assets/img/photo_1.jpg'
    },
    {
      path: '././assets/img/photo_2.jpg'
    },
    {
      path: '././assets/img/photo_3.jpg'
    },
    {
      path: '././assets/img/photo_4.jpg'
    },
    {
      path: '././assets/img/photo_5.jpg'
    },
    {
      path: '././assets/img/photo_6.jpg'
    },
    {
      path: '././assets/img/photo_1.jpg'
    },
    {
      path: '././assets/img/photo_2.jpg'
    },
    {
      path: '././assets/img/photo_3.jpg'
    },
    {
      path: '././assets/img/photo_4.jpg'
    },
    {
      path: '././assets/img/photo_5.jpg'
    },
    {
      path: '././assets/img/photo_6.jpg'
    },
  ];

  constructor(private mocks: MockService) { }

  ngOnInit(): void {
    console.log(this.gallery)
  }

  public deleteEl(slide: any, i: any): any {
    this.gallery.splice(i, 1);
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
          path: pathImage
        }
        console.log(obj);
        this.gallery.push(obj)
      };

    }
    console.log(this.gallery)
  }

}
