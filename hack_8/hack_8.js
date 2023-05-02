const fetch = require('cross-fetch');

/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

async function fnTest() {
  
  let datos = await fetch("https://jsonplaceholder.typicode.com/posts")
  let response = await datos.json()
 
  return response.length
}

fnTest()

module.exports = fnTest;