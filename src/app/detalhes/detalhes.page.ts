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

  private planeta: HttpResponse<any>;
  private planetaId: string;
  private fragmentoUrl: Array<string>;

  constructor(private planetasService: PlanetasService, private storage: Storage) { }

  ngOnInit() {
    this.fragmentoUrl = window.location.href.split('/');

    this.planetaId = this.fragmentoUrl[this.fragmentoUrl.length - 1];

    this.planetasService.consultarPorId(this.planetaId).subscribe(values => {
      this.planeta = values.body;
    });
  }

  adicionarFavoritos(): void {
    this.storage.set(this.planetaId, this.planeta);
    console.log("adicionado ao banco");
  }

}
