import {Component, OnInit}  from '@angular/core';
import { Router }           from '@angular/router-deprecated';

@Component({
    selector: 'my-contact',
    templateUrl: 'html/infos.component.html',
    styleUrls: ['css/contact.component.css',
    'css/app.component.css']
})
export class ContactComponent implements OnInit {
    title = 'Contact';
    description = 'Pour des infos supplémentaires ou commander une prestation';
    content = 'Description à écrire';

    constructor(private router: Router) { }

    ngOnInit() {
    }
}
