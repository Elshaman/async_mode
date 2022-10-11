const request = require('request');

const url = `https://pokeapi.co/api/v2/type`;

let r = request(url , {json: true } , (err, res, body) => {
    if (err) {
        return console.log(err);
    }


    console.log(body);

    //res is an object with more request and response info
    //console.log(res);
})