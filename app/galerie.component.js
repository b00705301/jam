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
var GalerieComponent = /** @class */ (function () {
    function GalerieComponent(router) {
        this.router = router;
        this.title = 'Galerie';
        this.description = 'Des photos et vidéos de nos concerts';
        this.content = 'Voici quelques photos et vidéos de nos concerts ! Pour l\'instant filmés en amateur, des enregistrements pro ne vont pas tarder à arriver';
    }
    GalerieComponent.prototype.ngOnInit = function () {
    };
    GalerieComponent = __decorate([
        core_1.Component({
            selector: 'my-galerie',
            templateUrl: 'html/galerie.component.html',
            styleUrls: ['css/galerie.component.css', 'css/app.component.css'],
            pipes: []
        }),
        __metadata("design:paramtypes", [router_deprecated_1.Router])
    ], GalerieComponent);
    return GalerieComponent;
}());
exports.GalerieComponent = GalerieComponent;
//# sourceMappingURL=galerie.component.js.map