let promise = new Promise(function(resolve , rejected){
    //operacion async
    if(/* operacion async exitosa */){
        resolve(result)
    }else{
        rejected(error)
    }
})

promise.then(function(result){ 
    return(nuevo_resultado)
}).then(function(result) {
    return(final_result)
})