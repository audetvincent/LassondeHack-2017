var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var LocationFeedComponent = (function () {
    function LocationFeedComponent() {
        this.isVisible = false;
    }
    LocationFeedComponent.prototype.ngOnInit = function () {
        this.feed = new Feed("This is a feed");
        this.isVisible = false;
    };
    LocationFeedComponent.prototype.show = function () {
        this.isVisible = true;
    };
    LocationFeedComponent.prototype.hide = function () {
        this.isVisible = false;
    };
    return LocationFeedComponent;
}());
LocationFeedComponent = __decorate([
    Component({
        selector: 'app-location-feed',
        templateUrl: './location-feed.component.html',
        styleUrls: ['./location-feed.component.css']
    }),
    __metadata("design:paramtypes", [])
], LocationFeedComponent);
export { LocationFeedComponent };
var Feed = (function () {
    function Feed(title) {
        this.title = title;
    }
    return Feed;
}());
export { Feed };
//# sourceMappingURL=C:/Users/Math/Desktop/hackatown/src/app/location-feed/location-feed.component.js.map