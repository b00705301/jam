import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {PageinfoService} from './pageinfo.service';

import {GalerieComponent} from './galerie.component';
import {InfosComponent} from './infos.component';
import {GroupeComponent} from './groupe.component';
import {ContactComponent} from './contact.component';


@Component({
  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  styleUrls: ['css/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    PageinfoService
  ]
})

@RouteConfig([
  {
    path: '/galerie',
    name: 'Galerie',
    component: GalerieComponent,
  },
  {
    path: '/infos',
    name: 'Infos',
    component: InfosComponent,
    useAsDefault: true
  },
  {
    path: '/groupe',
    name: 'Groupe',
    component: GroupeComponent,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent,
  },
])

export class AppComponent {
  title: string = 'Infos';
  showMenuScreen = false;

  MenuToggle() {
    this.showMenuScreen = !this.showMenuScreen;
    console.log('showMenuScreen: ' + this.showMenuScreen);
  }

  MenuOff() {
    this.showMenuScreen = false;
  }
}
