const needle = require('needle')

const url = 'https://rickandmortyapi.com/api/character'

needle('get' , url).
    then(res=>{
        res.body.results.forEach(element => {
            console.log(element)
            console.log('_______________________')
        });
    }).catch(err=>console.error(err))
