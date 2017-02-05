import { Component, ViewChild } from '@angular/core';
import { MapComponent } from './map/map.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent {
    @ViewChild(SettingsComponent) settings: SettingsComponent;
    @ViewChild(MapComponent) map: MapComponent;

    constructor() { 
        
    }

    dateChanged() : void {
        this.map.updateData(this.settings.startDate, this.settings.endDate);
    }
}