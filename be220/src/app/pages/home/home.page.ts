import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public swipersPersonal = [
    { image: 'assets/logo/bg_01.jpg', title: 'BackgroundSwiper 1' },
    { image: 'assets/logo/bg_02.jpg', title: 'BackgroundSwiper 2' },
    { image: 'assets/logo/bg_03.jpg', title: 'BackgroundSwiper 3' },
    { image: 'assets/logo/bg_04.jpg', title: 'BackgroundSwiper 4' },
  ];

  public swiperProgram = [
    { image: 'assets/logo/bg_01.jpg', title: 'BackgroundSwiper 1' },
    { image: 'assets/logo/bg_02.jpg', title: 'BackgroundSwiper 2' },
    { image: 'assets/logo/bg_03.jpg', title: 'BackgroundSwiper 3' },
    { image: 'assets/logo/bg_04.jpg', title: 'BackgroundSwiper 4' },
  ];

  constructor(
  ) { }

  ngOnInit() {
  }

}
