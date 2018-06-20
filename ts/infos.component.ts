import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {PageinfoService} from './pageinfo.service';

@Component({
  selector: 'my-infos',
  templateUrl: 'html/infos.component.html',
  styleUrls: ['css/infos.component.css', 'css/app.component.css'],
  pipes: []
})
export class InfosComponent implements OnInit {
  title = 'Infos';
  description = 'Qui sommes nous ?';
  content = 'Depuis plus de 20 ans, Jam réunit la fine fleur des musiciens de l’ESSEC. L’association compte parmi ses membres une trentaine d’étudiants passionnés par la musique. Ils ont tous à cœur d’animer le campus en musique et de représenter l’ESSEC à l’extérieur.';
  content2= 'Du rock au jazz, en passant par le funk ou la pop, tous les styles se rencontrent lors des concerts ou des sessions d’improvisation qui réunissent toutes les générations. Régulièrement sollicitée pour agrémenter des dîners, galas ou cocktails, l’association se réinvente chaque année autour de grands projets musicaux.'
  content3= "Si vous souhaitez vous aussi nous entendre intérpréter un catalogue de qualité, n'hésitez pas à nous contacter !"
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
