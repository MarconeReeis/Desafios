import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public infoUser: any;
  //public swipersPersonal = [];

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
  public swiperContent = [
    { image: 'assets/logo/bg_04.jpg', title: 'BackgroundSwiper 1' },
    { image: 'assets/logo/bg_06.jpg', title: 'BackgroundSwiper 2' },
    { image: 'assets/logo/bg_07.jpg', title: 'BackgroundSwiper 3' },
  ];  

  constructor(
    private firestoreService: FirebaseService
  ) { }

  ngOnInit() {
    this.buscarInfoUser();
  }

  buscarInfoUser() {
    this.firestoreService.getCollectionData('infoSwipers').subscribe({
      next: ((data: any) => {
        console.log(data)
      }),
      error: (error) => {
        // Tratar erro
        console.log(error.message);
      }
    });
  }

}
