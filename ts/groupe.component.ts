import {Component, OnInit}  from '@angular/core';
import { Router }           from '@angular/router-deprecated';

@Component({
    selector: 'my-groupe',
    templateUrl: 'html/groupe.component.html',
    styleUrls: ['css/groupe.component.css',
    'css/app.component.css']
})
export class GroupeComponent implements OnInit {
    title = 'Groupe';
    description = 'Voici quelques membres de Jam';
    content = 'Description à écrire';

    constructor(private router: Router) { }

    ngOnInit() {
    }
}
