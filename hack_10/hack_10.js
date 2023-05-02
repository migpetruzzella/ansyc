/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/id
- Return: "data" 
- Contenido del return data:
{
   "id": 50
}
 NOTA: se envia el "id" por parámetro con valor 50
*/
let id="50"
const fetch = require('cross-fetch');

async function fnTest(id) {
  data= await fetch('https://jsonplaceholder.typicode.com/posts/50', {method: 'PUT', body: JSON.stringify({ "id":50 })  })
  
  response= await data.json()
  console.log(response)

  return response
}
fnTest()


module.exports = fnTest;