/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/
const fetch = require('cross-fetch');

async function fnTest() {
  let datos = await fetch("https://jsonplaceholder.typicode.com/posts", {method:'POST'})
  let response = await datos.json()
 
  return response

}

module.exports = fnTest;