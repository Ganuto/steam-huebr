import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Login / Registar', url: '/login', icon: 'log-in' },
    { title: 'Favoritos', url: '/favoritos', icon: 'heart' }
  ];

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }
}
