from pymongo import MongoClient
import requests

client = MongoClient('mongodb://cabby:test123@ds053798.mlab.com:53798/hackatown')
db = client.hackatown
collection = db.events

for doc in db.events.find({"location.latitude": { "$eq" : "" }, "location.longitude": { "$eq" : "" }}):
    name = doc['location']['name']
    query = "https://maps.googleapis.com/maps/api/geocode/json?address=" + name.replace(' ', '+') + ",+Montreal,+CA&key=AIzaSyDvbwnHjBQ9ZwouK5tWx_XWbX32oVZZjhc"
    response = requests.get(query)
    (lat, lng) = (response.json()['results'][0]['geometry']['location']['lat'], response.json()['results'][0]['geometry']['location']['lng'])
    collection.update_one({ "_id" : doc['_id'] }, {"$set" : { "location.latitude": str(lat)}})
    collection.update_one({ "_id": doc['_id']}  , {"$set": {"location.longitude": str(lng)}})
    print("nouvelle lat,lng" + str(lat) + ":" + str(lng))