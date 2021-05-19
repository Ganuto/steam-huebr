import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  public planetas: Array<any> = [];
  private posicaoPlanetas: any = [];

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.forEach(item => {
      this.planetas.push(item);
      console.log(this.planetas);

    });

    this.storage.keys().then(keys => {
      this.posicaoPlanetas = keys;
    });

  }

  removerFavoritos(id: number) {
    console.log("removido " + id);

    const planetaRemovido = this.posicaoPlanetas[id];

    console.log(planetaRemovido);

    this.storage.remove(planetaRemovido);
    this.planetas.splice(id, 1);

    console.log(this.storage.keys());
    console.log(this.planetas);
  }

  getImagemPlaneta(nomePlaneta: string): string {
    switch (nomePlaneta) {
      case 'Tatooine':
        return 'assets/img/Tatooine_TPM.png';
      case 'Alderaan':
        return 'assets/img/Alderaan_2.jpg';
      case 'Yavin IV':
        return 'assets/img/Yavin-4-SWCT.png';
      case 'Hoth':
        return 'assets/img/Hoth_SWCT.png';
      case 'Dagobah':
        return 'assets/img/Dagobah_ep3.jpg';
      case 'Bespin':
        return 'assets/img/Bespin-SWCT.png';
      case 'Endor':
        return 'assets/img/Endor_FFGRebellion.png';
      case 'Naboo':
        return 'assets/img/Naboo_planet.png';
      case 'Coruscant':
        return 'assets/img/CoruscantGlobeE1.png';
      case 'Kamino':
        return 'assets/img/Kamino-DB.png';
    }
  }
}
