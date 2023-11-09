import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { map } from 'rxjs/operators';

interface SwiperItem {
  image: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public infoUser: any;

  public swiperPersonal: SwiperItem[] = [];
  public swiperProgram: SwiperItem[] = [];
  public swiperContent: SwiperItem[] = [];

  public swipersPersonal = [
    { image: 'assets/logo/bg_01.jpg', title: 'BackgroundSwiper 1' },
    { image: 'assets/logo/bg_02.jpg', title: 'BackgroundSwiper 2' },
    { image: 'assets/logo/bg_03.jpg', title: 'BackgroundSwiper 3' },
    { image: 'assets/logo/bg_04.jpg', title: 'BackgroundSwiper 4' },
  ];
  public swipersProgram = [
    { image: 'assets/logo/bg_01.jpg', title: 'BackgroundSwiper 1' },
    { image: 'assets/logo/bg_02.jpg', title: 'BackgroundSwiper 2' },
    { image: 'assets/logo/bg_03.jpg', title: 'BackgroundSwiper 3' },
    { image: 'assets/logo/bg_04.jpg', title: 'BackgroundSwiper 4' },
  ];
  
  public swipersContent = [
    { image: 'assets/logo/bg_04.jpg', title: 'BackgroundSwiper 1' },
    { image: 'assets/logo/bg_05.jpg', title: 'BackgroundSwiper 2' },
    { image: 'assets/logo/bg_06.jpg', title: 'BackgroundSwiper 3' },
  ];

  constructor(
    private firestoreService: FirebaseService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.buscarInfoUser();
    this.bemvindoToast();
  }

  async buscarInfoUser() {
    this.firestoreService.getCollectionWithMetadata('infoSwipers').subscribe({
      next: (data: any[]) => {
        console.log("Dados brutos do Firebase: ", data);

        this.swiperPersonal = data
          .filter(item => item.data.category === 'personal')
          .map(item => {
            return {
              image: item.data.urlSwiper,
              title: item.data.title
            };
          });

        this.swiperProgram = data
          .filter(item => item.data.category === 'program')
          .map(item => {
            return {
              image: item.data.urlSwiper,
              title: item.data.title
            };
          });

        this.swiperContent = data
          .filter(item => item.data.category === 'content')
          .map(item => {
            return {
              image: item.data.urlSwiper,
              title: item.data.title
            };
          });
      },
      error: (error) => {
        console.log("Erro ao buscar dados: ", error);
      }
    });
  }

  async bemvindoToast() {
    const toast = await this.toastController.create({
      message: 'Bem-Vindo!',
      duration: 1500,
      color: 'success',
      position: 'bottom',
    });
    await toast.present();
  }

}
