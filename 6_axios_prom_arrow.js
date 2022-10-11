var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://rickandmortyapi.com/api/character',
};

axios(config)
.then((response) => {
  const tipos = response.data.results
  tipos.forEach(element => {
    console.log(element.name)
    console.log('----------------------------------');
  });
  //console.log(JSON.stringify(response.data));
})
.catch( (error)=> {
  console.log(error);
});