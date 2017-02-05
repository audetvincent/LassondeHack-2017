var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { LocationFeedComponent } from './location-feed/location-feed.component';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.mapMarkerClicked = function () {
        this.locationFeed.show();
    };
    return AppComponent;
}());
__decorate([
    ViewChild(LocationFeedComponent),
    __metadata("design:type", LocationFeedComponent)
], AppComponent.prototype, "locationFeed", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=C:/Users/Math/Desktop/hackatown/src/app/app.component.js.map