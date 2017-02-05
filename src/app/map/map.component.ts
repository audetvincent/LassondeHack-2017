import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    events: Event[];
    startDate: Date;
    lat: number = 45.5;
    lng: number = -73.6;
    zoom: number = 12;

    @Output()
    markerClicked : EventEmitter<number> = new EventEmitter();
    
    constructor(private eventService: EventService) {
        this.events = new Array<Event>();
        this.startDate = new Date();
    }


    ngOnInit() {
        this.eventService.getAllEvents()
        .subscribe(result => {
            this.events = result;
        });
    }

    updateData(startDate: Date, endDate: Date) : void {
        this.startDate = startDate;
        this.eventService.getEvents(startDate, endDate)
        .subscribe(result => {
            this.events = new Array<Event>();
            for(let e in result) {
                if(new Date(result[e].startDate) > new Date(this.startDate.toISOString()))
                    this.events.push(result[e]);
            }
            console.log(this.events);
        });
    }
}
