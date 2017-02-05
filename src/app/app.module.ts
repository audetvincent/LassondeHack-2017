import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { LocationFeedComponent } from './location-feed/location-feed.component';
import { MapComponent } from './map/map.component';
import { EventService } from './event.service';
import { SettingsComponent } from './settings/settings.component';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LocationFeedComponent,
    MapComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDaJvOfygq7qFq7dvmNmUb5YpFVLTLiFo'
    }),
    DatepickerModule.forRoot(),
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
