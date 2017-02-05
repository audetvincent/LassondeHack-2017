import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-location-feed',
    templateUrl: './location-feed.component.html',
    styleUrls: ['./location-feed.component.css']
})
export class LocationFeedComponent implements OnInit {
    feed: Feed;
    isVisible : boolean = false;
    constructor() { }

    ngOnInit() {
        this.feed = new Feed("This is a feed");
        this.isVisible = false;
    }

    show() {
        this.isVisible = true;
    }

    hide() {
        this.isVisible = false;
    }

}

export class Feed {
    title: string;
    constructor(title: string) {
        this.title = title;
    }
}

