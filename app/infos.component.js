"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var InfosComponent = /** @class */ (function () {
    function InfosComponent(router) {
        this.router = router;
        this.title = 'Infos';
        this.description = 'Qui sommes nous ?';
        this.content = 'Depuis plus de 20 ans, Jam réunit la fine fleur des musiciens de l’ESSEC. L’association compte parmi ses membres une trentaine d’étudiants passionnés par la musique. Ils ont tous à cœur d’animer le campus en musique et de représenter l’ESSEC à l’extérieur.';
        this.content2 = 'Du rock au jazz, en passant par le funk ou la pop, tous les styles se rencontrent lors des concerts ou des sessions d’improvisation qui réunissent toutes les générations. Régulièrement sollicitée pour agrémenter des dîners, galas ou cocktails, l’association se réinvente chaque année autour de grands projets musicaux.';
        this.content3 = "Si vous souhaitez vous aussi nous entendre intérpréter un catalogue de qualité, n'hésitez pas à nous contacter !";
    }
    InfosComponent.prototype.ngOnInit = function () {
    };
    InfosComponent = __decorate([
        core_1.Component({
            selector: 'my-infos',
            templateUrl: 'html/infos.component.html',
            styleUrls: ['css/infos.component.css', 'css/app.component.css'],
            pipes: []
        }),
        __metadata("design:paramtypes", [router_deprecated_1.Router])
    ], InfosComponent);
    return InfosComponent;
}());
exports.InfosComponent = InfosComponent;
//# sourceMappingURL=infos.component.js.map