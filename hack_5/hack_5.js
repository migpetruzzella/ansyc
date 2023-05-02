/*
- Mediante la libreria: axios
- Hacer una petición de tipo: DELETE
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/

let axios= require("axios")

async function fnTest() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  let response= await axios.delete(url)
  return response;
}

module.exports = fnTest;