import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  styles: [
    "node_modules/slick-carousel/slick/slick.scss",
    "node_modules/slick-carousel/slick/slick-theme.scss"
  ],
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
  ];
   slideConfig = {
    autoplay: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    arrows: true,
    infinite: false,
  };

  constructor(private mocks:MockService) { }

  ngOnInit(): void {
    // this.gallery = this.mocks.getPhotoJSON().subscribe(item=>{
    //   console.log(item)
    // })
  }

}
