const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const exito = (response)=> {
    console.log(JSON.parse(response).results)
}


fail = (status) => console.log(status);

const get_data = (url)=> {
    return new Promise(function(resolve , reject){
        let http = new XMLHttpRequest()
        http.open('GET' , url)
        http.send();
        http.onload = function(){
            if(http.status === 200){
                resolve(http.responseText)
            }else{
                reject(Error(http.status))
            }
        } 
    })
    
}

const url = 'https://pokeapi.co/api/v2/type'
get_data(url).then((response)=>{
    exito(response)
}).catch((status)=>{
    fail(status)
})
