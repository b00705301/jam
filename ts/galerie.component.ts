import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {PageinfoService} from './pageinfo.service';

@Component({
  selector: 'my-galerie',
  templateUrl: 'html/galerie.component.html',
  styleUrls: ['css/galerie.component.css', 'css/app.component.css'],
  pipes: []
})
export class GalerieComponent implements OnInit {
  title = 'Galerie';
  description = 'Des photos et vidéos de nos concerts';
  content = 'Voici quelques photos et vidéos de nos concerts ! Pour l\'instant filmés en amateur, des enregistrements pro ne vont pas tarder à arriver';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
