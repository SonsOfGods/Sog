import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Swiper, Zoom, Navigation, FreeMode, Scrollbar, EffectCoverflow  } from 'swiper';

SwiperCore.use([Pagination, Zoom, Navigation, FreeMode, Scrollbar, EffectCoverflow ]);
@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.scss'],
})
export class GodsComponent implements OnInit {

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

    const swiper = new Swiper('.gods_swiper', {
     // Default parameters
     spaceBetween: 100,
     //freeMode: true,
     zoom: {
       maxRatio: 3,
     },
     pagination: true,
     navigation: {
       nextEl: '.god_swiper-button-next',
       prevEl: '.god_swiper-button-prev',
     },
     loop: true,
     centeredSlides: true,
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
