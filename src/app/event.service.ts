import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Event, Location } from './event';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EventService {

    constructor(private http: Http) { }

    getAllEvents() : Observable<Event[]> {
        return this.http.get('http://localhost:3000/api/')
        .map(res => res.json() as Event[])
        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }

    getEvents(startDate: Date, endDate: Date) : Observable<Event[]> {
        return this.http.get('http://localhost:3000/api/events?startDate=' + startDate.toString() +"&endDate=" + endDate.toString())
        .map(res => res.json() as Event[])
        .catch(this.handleError);    
    }
}
