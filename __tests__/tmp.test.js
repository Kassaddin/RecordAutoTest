const axios = require('axios').default;

let getStation = new Promise(function (response, error) {
    axios.get('https://www.radiorecord.ru/api/stations/')
    .then(function (response)
        {
            console.log(response);
        })
    .catch(function (error) 
        {
            console.warn(error);
        })
})

test('Get list of stations', () => {
    return expect(getStation()).resolves.toBe('All stations are in place');
});

test('Return an error', () => {
    return expect(getStation()).rejects.toMatch('Error');
});