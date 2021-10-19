let myPromise = new Promise(function (myResolve, myReject) {
    let tmp = Math.floor(Math.random()*100)
    if (tmp < 50)
    {
        myResolve();
        console.log(tmp);  
    } 
    else
    {
        myReject();
        console.log(tmp);  
    } 

});

myPromise.then(
    function (value) { console.log("Value promice") },
    function (error) { console.log("Error promice") }
);