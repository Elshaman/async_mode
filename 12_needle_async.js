const needle = require('needle');


const url =  'https://pokeapi.co/api/v2/type'

const a = async () => {

    try {
        const resp1 = await needle('get' , url);
        resp1.body.results.forEach(element => {
            console.log(element.name)
            console.log('-----------------------------')
        });
        //console.log(resp1.body.results);


    } catch (err) {
        console.log(err);
    }

};

a()