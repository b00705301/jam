"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var pageinfo_service_1 = require("./pageinfo.service");
var galerie_component_1 = require("./galerie.component");
var infos_component_1 = require("./infos.component");
var groupe_component_1 = require("./groupe.component");
var contact_component_1 = require("./contact.component");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Infos';
        this.showMenuScreen = false;
    }
    AppComponent.prototype.MenuToggle = function () {
        this.showMenuScreen = !this.showMenuScreen;
        console.log('showMenuScreen: ' + this.showMenuScreen);
    };
    AppComponent.prototype.MenuOff = function () {
        this.showMenuScreen = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'html/app.component.html',
            styleUrls: ['css/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                pageinfo_service_1.PageinfoService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/galerie',
                name: 'Galerie',
                component: galerie_component_1.GalerieComponent,
            },
            {
                path: '/infos',
                name: 'Infos',
                component: infos_component_1.InfosComponent,
                useAsDefault: true
            },
            {
                path: '/groupe',
                name: 'Groupe',
                component: groupe_component_1.GroupeComponent,
            },
            {
                path: '/contact',
                name: 'Contact',
                component: contact_component_1.ContactComponent,
            },
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map