import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public planetas: Array<Object>;

  constructor(private filmesService: FilmesService, private router: Router) { }

  ngOnInit() {
    this.filmesService.consultarTodos().subscribe(values => {
      this.planetas = values.body.results;
    });
  }

}
