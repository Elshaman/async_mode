const axios = require('axios')

const url =  'https://pokeapi.co/api/v2/type'

const a = async ()=>{
    try{
        const resp = await axios.get(url)
        resp.data.results.forEach(element => {
            console.log(element)
            console.log('----------------------------')
        });
        //console.log(resp.data)
        
    }catch(err){
        console.log(err)
    }
} 

a()