import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PlanetasService } from '../services/planetas.service';

@Component({
  selector: 'app-produto',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public planeta: HttpResponse<any>;
  private planetaId: string;
  private fragmentoUrl: Array<string>;

  constructor(private planetasService: PlanetasService, private storage: Storage) { }

  ngOnInit() {
    this.planeta = new HttpResponse<any>();
    this.fragmentoUrl = window.location.href.split('/');

    this.planetaId = this.fragmentoUrl[this.fragmentoUrl.length - 1];

    this.planetasService.consultarPorId(this.planetaId).subscribe(values => {
      this.planeta = values.body;
      console.log(this.planeta);

    });
  }

  adicionarFavoritos(): void {
    this.storage.set(this.planetaId, this.planeta);
    console.log("adicionado ao banco");
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
