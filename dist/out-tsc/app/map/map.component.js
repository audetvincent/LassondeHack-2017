var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { EventService } from '../event.service';
var MapComponent = (function () {
    function MapComponent(eventService) {
        this.eventService = eventService;
        this.lat = 45.5;
        this.lng = -73.6;
        this.zoom = 12;
        this.markerClicked = new EventEmitter();
        this.events = new Array();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getEvents(function (result) { return _this.events = result; });
    };
    MapComponent.prototype.markerClick = function (event) {
        console.log("Marker clicked");
        this.markerClicked.emit(5);
    };
    return MapComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MapComponent.prototype, "markerClicked", void 0);
MapComponent = __decorate([
    Component({
        selector: 'app-map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.css']
    }),
    __metadata("design:paramtypes", [EventService])
], MapComponent);
export { MapComponent };
//# sourceMappingURL=C:/Users/Math/Desktop/hackatown/src/app/map/map.component.js.map