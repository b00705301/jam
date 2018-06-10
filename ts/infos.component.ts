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
  description = 'Des infos sur nous';
  content = 'Description à écrire';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
