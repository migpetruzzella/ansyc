const axios = require("axios");

/*
- Mediante la libreria: axios
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/users/1
- Return: "response" global de la petición 
*/

async function fnTest() {
    try{
        const url = 'https://jsonplaceholder.typicode.com/users/1';
        let response= await axios.get(url)
        console.log(response)
        return response;

    }catch{

    }

}

fnTest()

module.exports = fnTest;