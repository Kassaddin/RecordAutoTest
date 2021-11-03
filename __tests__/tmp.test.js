const axios = require('axios').default;

// URL's for API methods
const urlGetStations = 'https://www.radiorecord.ru/api/stations/';
const urlPostSearch = 'https://www.radiorecord.ru/api/api/search/';
const arrayToCheck = require('../array.json');

// Status codes
const statusOK = 200;

// Return JSON of a GET method: return JSON
async function getStations(url) {
    const response = await axios.get(url);

    return response;
}

// Return status of get method: return status [value = 200]
async function getStationsStatus(url) {
    const response = await getStations(url);

    return response.status;
}

// Get number of stations by counting last key in JSON: return numeric position of last station in JSON [value = 80]
async function getStationsNumber(url) {
    const response = await getStations(url);

    let numberOfStations = Object.keys(response.data.result.stations).length;

    return numberOfStations;
}

// Parse JSON to get array for assert: return new array
async function getStationsArray(url) {
    const response = await getStations(url);
    const eof = await getStationsNumber(url);

    let array = [];
    for (i = 0; i < eof; i++) {
        tmpStr = JSON.stringify(response.data.result.stations[i]);
        array[i] = tmpStr.substring(tmpStr.indexOf('"title":'), tmpStr.lastIndexOf(',"tooltip"')).split('"title":').join('');
    }

    return array;
}

// Assert parsed array with expected value: return true if passed
async function assertStations(url) {
    const response = await getStationsArray(url);

    let eof = Object.keys(response).length;
    passCondition = false;

    for (i = 0; i < eof; i++) {
        if (`${response[i]}` === `"${arrayToCheck.title[i]}"`) {
            passCondition = true;
        }
        else {
            return passCondition = false;
        }
    }

    return passCondition;
}

// Tests
describe ('Test-1: Stations are pageble, should recieve 200.', () => {
    test ('recive status of a GET method', () => {
        const output = statusOK;

        expect(getStationsStatus(urlGetStations)).resolves.toBe(output);
    });
});

describe ('Test-2: Get number of stations, should be 80', () => {
    test ('get numeric number of a last station in JSON', () => {
        const output = 80;

        expect(getStationsNumber(urlGetStations)).resolves.toBe(output);

    });
});

describe ('Test-3: Assert stations with expected result, should be true', () => {
    test ('assert parsed array with expected', () => {
        const output = true;

        expect(assertStations(urlGetStations)).resolves.toBe(output);
    });
});