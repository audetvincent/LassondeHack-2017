from pymongo import MongoClient
client = MongoClient('mongodb://cabby:test123@ds053798.mlab.com:53798/hackatown')
db = client.hackatown
collection = db.events

#scrape events and start-end times

f = open('events-cdn-ndg.csv', 'r')

months = {
    'January' : 1,
    'February': 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6,
    'July': 7,
    'August': 8,
    'September': 9,
    'October': 10,
    'November': 11,
    'December': 12,
}

for line in f:
    sep = line.split(',')

    if sep[0] == '':
        sep = sep[1:]
    if len(sep) == 1:
        #nom de location
        curr_loc = sep[0].split('\n')[0]
        continue
    act_type = sep[0]
    date_nf = sep[1]
    title = sep[2]
    desc =  sep[3] + ' - ' + sep[4]

    print(date_nf)
    if " at " not in date_nf:
        continue
    date_sep = date_nf.split(' at ')
    info_date = date_sep[0].split(' ')
    info_hour = date_sep[1].split(' ')
    no_month = str(months[info_date[0]]).zfill(2)
    no_day = info_date[1].zfill(2)

    hours = 0
    minutes = 0
    num_h = info_hour[0].split(':')
    if len(num_h) == 2:
        minutes = num_h[1]
    hours = int(num_h[0])
    if info_hour[1][0] == 'p':
        hours = hours + 12

    minute = str(minutes).zfill(2)
    hour = str(hours).zfill(2)

    date_f = "2017-" + no_month + "-" + no_day + "T" + hour +":" + minute + ":00.000Z"

    example = "2017-02-05T07:47:23.549Z"
    db_entry = {
        "name": title + " - " + act_type,
        "description": desc,
        "link" : "",
        "location" : {
            "longitude":"",
            "latitude" :"",
            "name" : curr_loc
        },
        "startDate": date_f,
        "endDate":""
    }

    i = collection.insert_one(db_entry).inserted_id