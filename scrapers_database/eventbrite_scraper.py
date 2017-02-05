from pymongo import MongoClient
import requests
import configparser

client = MongoClient('mongodb://cabby:test123@ds053798.mlab.com:53798/hackatown')
db = client.hackatown
collection = db.events


config = configparser.ConfigParser()
config.read('cred.cfg')

token = config.get("auth", "token")

categories = ['103']
lat, lon = "45.523554","-73.644988"

cat_var = "categories=" + ",".join(categories)
locw_var = "location.within=30km"
locx_var = "location.latitude=" + lat
locy_var = "location.longitude=" + lon

variables = "&".join([cat_var, locw_var, locx_var, locy_var])

response = requests.get(
    "https://www.eventbriteapi.com/v3/events/search/?" + variables,
    headers = {
        "Authorization": "Bearer " + token,
    },
    verify = True,  # Verify SSL certificate
)

class Event:
    def __init__(self, json):
        self.title = json['name']['text']
        self.start = json['start']['utc']
        self.end = json['end']['utc']
        self.url = json['url']
        self.venue_id = json['venue_id']
        self.find_where()
    def find_where(self):
        response = requests.get(
            "https://www.eventbriteapi.com/v3/venues/" + self.venue_id,
            headers = {
                "Authorization": "Bearer " + token,
            },
            verify = True,  # Verify SSL certificate
        )
        json = response.json()
        self.lat = json['latitude']
        self.lon = json['longitude']
    def __str__(self):
        return str((self.title, self.url,
                    self.start, self.end,
                    self.lat, self.lon))

for ev in response.json()['events']:
    e = Event(ev)
    db_entry = {
        "name": e.title,
        "description": "",
        "link" : e.url,
        "location" : {
            "longitude":e.lon,
            "latitude" :e.lat,
            "name" : ""
        },
        "startDate": e.start,
        "endDate":e.end
    }

    i = collection.insert_one(db_entry).inserted_id
    print(str(i) + " inserted")
