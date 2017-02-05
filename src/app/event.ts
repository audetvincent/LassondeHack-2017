export class Event{
    name: string;
    startDate: Date;
    endDate: Date;
    location: Location;
    link: string;
    description: string;

    constructor(name: string, startDate: Date, endDate: Date, location: Location, link: string) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.link = link;
    }
}

export class Location {
    longitude: number;
    latitude: number;

    constructor(longitude: number, latitude: number) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
}