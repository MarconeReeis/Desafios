import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public infoUser = [
    {
      userImageUrl: "https://img.freepik.com/fotos-gratis/homem-cacheado-com-sorriso-largo-mostra-dentes-perfeitos-se-diverte-com-uma-conversa-interessante-tem-cabelos-escuros-e-crespos-e-crespos-contra-uma-parede-branca_273609-17092.jpg?w=1480&t=st=1699492977~exp=1699493577~hmac=1fc431eb8bf6fb0e77867eb043fe8529263b3c1f970e30e6811c1e98a094ba7a",
      userName: 'Leonardo Santos',
      userNivel: 'Roxo'
    },
  ];

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

    this.firestoreService.getCollectionWithMetadata('be220Desafio').subscribe({
      next: (data: any[]) => {
        if (data && data.length > 0) {
          this.infoUser = data[0];
          console.log(this.infoUser);
        } else {
          console.log('Nenhum dado encontrado.');
        }
      },
      error: (error: any) => {
        console.error(error.message);
      },
    });
    loading.dismiss();
  }

}
