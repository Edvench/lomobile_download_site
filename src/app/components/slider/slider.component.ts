import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public gallery:any  = [
    {
      path:'././assets/img/photo_1.jpg'
    },
    {
      path:'././assets/img/photo_2.jpg'
    },
    {
      path:'././assets/img/photo_3.jpg'
    },
    {
      path:'././assets/img/photo_4.jpg'
    },
    {
      path:'././assets/img/photo_5.jpg'
    },
    {
      path:'././assets/img/photo_6.jpg'
    },
    {
      path:'././assets/img/photo_1.jpg'
    },
    {
      path:'././assets/img/photo_2.jpg'
    },
    {
      path:'././assets/img/photo_3.jpg'
    },
    {
      path:'././assets/img/photo_4.jpg'
    },
    {
      path:'././assets/img/photo_5.jpg'
    },
    {
      path:'././assets/img/photo_6.jpg'
    },
    {
      path:'././assets/img/photo_1.jpg'
    },
    {
      path:'././assets/img/photo_2.jpg'
    },
    {
      path:'././assets/img/photo_3.jpg'
    },
    {
      path:'././assets/img/photo_4.jpg'
    },
    {
      path:'././assets/img/photo_5.jpg'
    },
    {
      path:'././assets/img/photo_6.jpg'
    },
  ];

  constructor(private mocks:MockService) { }

  ngOnInit(): void {
    console.log(this.gallery)
  }

  public deleteEl(slide: any, i: any): any {
    this.gallery.splice(i, 1);
  }

}
