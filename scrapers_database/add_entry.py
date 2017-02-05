from pymongo import MongoClient
import requests

client = MongoClient('mongodb://cabby:test123@ds053798.mlab.com:53798/hackatown')
db = client.hackatown
collection = db.events

name = "Osheaga"
desc = "DJs and fun"
link = "www.osheaga.com/"
locname = " Île Sainte-Hélène"
startDate =  "2017-07-29T00:00:00.000Z"
endDate = "2017-07-31T00:00:00.000Z"



db_entry = {
    "name": name,
    "description": desc,
    "link": link,
    "location": {
        "longitude": "",
        "latitude": "",
        "name": locname
    },
    "startDate": startDate,
    "endDate": endDate
}


i = collection.insert_one(db_entry).inserted_id
print("inserted : " + str(i))