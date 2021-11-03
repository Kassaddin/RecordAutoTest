const jsonToParse = require('../RecordAutoTest/stations.json');
const arrayToCheck = require('../RecordAutoTest/array.json');
const eof = Object.keys(jsonToParse.result.stations).length;

//var parsedArray = JSON.stringify(arrayToCheck);
//console.log(parsedArray);

function getArray() {
    let array = [];
    for (i = 0; i < eof; i++) {
        let tmpStr = JSON.stringify(jsonToParse.result.stations[i]);
        array[i] = tmpStr.substring(tmpStr.indexOf('"title":'), tmpStr.lastIndexOf(',"tooltip"')).split('"title":').join('');
        //console.log(array[i]);
    }
    return array;
}

function assertStations() {
    const response = getArray();

    passCondition = false;

    for (i = 0; i < eof; i++) {
        if (`${response[i]}` === `"${arrayToCheck.title[i]}"`) {
            console.log(`${response[i]} is equal to "${arrayToCheck.title[i]}"`);
            passCondition = true; 
        }
        else {
            console.log("Not true");
            return passCondition = false;
        }
    }

    return passCondition;
}

//getArray();
assertStations();