import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    @Output()
    dateChangedEvent: EventEmitter<string> = new EventEmitter<string>();

    startDate: Date;
    endDate: Date;

    constructor() { 
        this.startDate = new Date();
        this.endDate = new Date(Date.now() + 60*60*1000*24*7);
    }

    ngOnInit() : void {

    }

    dateChanged() : void {
        this.dateChangedEvent.emit("");
    }
}
