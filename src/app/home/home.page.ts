import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PlanetasService } from '../services/planetas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public planetas: Array<Object>;

  constructor(private filmesService: PlanetasService, private storage: Storage) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  ngOnInit() {
    this.filmesService.consultarTodos().subscribe(values => {
      this.planetas = values.body.results;
    });
    
  }

}
