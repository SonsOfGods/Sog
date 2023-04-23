import {
  AfterContentChecked,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Swiper, Zoom, Navigation, FreeMode } from 'swiper';

SwiperCore.use([Pagination, Zoom, Navigation, FreeMode]);
@Component({
  selector: 'app-gallery-dos',
  templateUrl: './gallery-dos.component.html',
  styleUrls: ['./gallery-dos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GalleryDosComponent implements OnInit, AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent | undefined;

  onResize() {}

  onSlideChange() {
    console.log('slide change');
  }

  constructor() {}
  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  ngOnInit(): void {
    var width = window.innerWidth;
    console.log(width);
    if (width < 800) {
    }

const swiper = new Swiper('.swiper', {
      // Default parameters
      spaceBetween: 100,
      //freeMode: true,
      zoom: {
        maxRatio: 3,
      },
      pagination: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      freeMode: true,
      loop: true,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        500: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        1500: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }
}
