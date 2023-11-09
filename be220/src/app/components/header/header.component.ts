import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public infoUser: any;

  constructor(
    private firestoreService: FirebaseService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.buscarInfoUser();
  }

  async buscarInfoUser() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    await loading.present();

    this.firestoreService.getCollectionData('be220Desafio').subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.infoUser = data[0];
          console.log(this.infoUser);
        } else {
          // Trate o caso de não haver dados.
          console.log('Nenhum dado encontrado.');
        }
      },
      error: (error) => {
        console.error(error.message);
      },
    });
    loading.dismiss();
  }

}




