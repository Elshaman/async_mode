const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function exito(response){
    console.log(JSON.parse(response).results)
}


fail = (status) => console.log(status);

function get_data(url , exito , fail){
    let http = new XMLHttpRequest()
    http.open('GET' , url)
    http.send();
    http.onload = function(){
        if(http.status === 200){
           exito(http.responseText)
        }else{
            fail(http.status)
        }
    } 
}

const url = 'https://pokeapi.co/api/v2/type'
get_data(url , exito , fail)
