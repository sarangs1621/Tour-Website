import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";
import {SwiperOptions} from "swiper";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  image:string = './assets/swiper_one.avif';

  backgroundImage = [
    {
    image: '/assets/swiper_one.avif',
      description: 'Punakha'
  },
    {
      image: '/assets/swiper_two.avif',
      description: 'Bhutan Point'
    },
    {
      image: '/assets/swiper_three.avif',
      description: 'Thimphu City'
    },
    {
      image: '/assets/swiper_four.avif',
      description: 'Dochula'
    },
    {
      image: '/assets/swiper_five.avif',
      description: 'Paro Taktsang'
    },
    {
      image: '/assets/swiper_six.avif',
      description: 'Paro Dzong'
    },
  ];
  constructor() { }

  icon = [
    {
    icon: 'fa-sharp fa-solid fa-person-hiking',
    name:'Hiking'
  },
    {
      icon: 'fa-solid fa-car',
      name:'By Car'
    },
    {
      icon: 'fa-regular fa-person-biking',
      name:'Bike Hike'
    },

  ]

  ngOnInit(): void {
  }
  public swiperOptions: SwiperOptions = {
    // define your swiper options here
    loop:true,
    speed: 800,
    slidesPerView: 1,
    navigation: true,
    pagination: true,
    allowSlidePrev: true,
    allowTouchMove: true,
    spaceBetween: 20,
    breakpoints : {
      700 : {
        slidesPerView: 3,
      }
    }
  };
}
