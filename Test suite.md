## Test suite

### Backend, API tests:
    1. Number of stations. Expected result: number of stations is 80.
        a. GET: https://www.radiorecord.ru/api/stations/
        ER: Responce: JSON with a set of stations

    2. Assert stations by names. Expected result: stations are similar to array.
        a. GET: https://www.radiorecord.ru/api/stations/
        b. Assert with names database
        ER: stations in JSON are similar to array
    
    3. Search "I Refuse", check for upper\lower case. Expected result: search done by both upper and lower cases.
        a. POST: https://www.radiorecord.ru/api/api/search/
        ER: Responce: JSON with keywords: ["I Refuse", "i refuse"]
    
    4. Search "I Refuse", check for result. Expected result: three tracks are in place.
        a. POST: https://www.radiorecord.ru/api/api/search/
        ER: Responce: JSON with tracks: {[id: 11551], [id: 123183], [id: 130296]}

### Frontend tests:
    1. Radiochanels bar. Click on a Chanel icon. Expected result: selected station start it's playback.
    2. Radiochanels bar. Click on an arrow icon. Expected result: go to the selected channel page.
    3. Events bar. Click on an event banner. Expected result: go to the selected event page.
    4. Superchart list. Click on a first track. Expected result: selected track start it's playback.

### End-to-end tests:
    1. Registrtaion:
        a. Create new account.
        b. Log in into new account.
    2. 