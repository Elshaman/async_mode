const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const exito = (response)=> {
    console.log(JSON.parse(response).results)
}


fail = (status) => console.log(status);

const  get_data = (url)=> {
    return new Promise(function(resolve , reject){
        let http = new XMLHttpRequest()
        http.open('GET' , url)
        http.onload = ()=> {
            if(http.status === 200){
                resolve(http.responseText)
            }else{
                reject(Error(http.status))
            }
        } 
        http.onerror = ()=>{
            reject(Error("Error de red "));
        }
        http.send();
    })
    
}

const url = "https://pokeapi.co/api/v2/type"


const a = async  () => {
    try{
        let response  = await get_data(url);
        exito(response);
    }catch(status){
         fail(status);
    }
};

a()