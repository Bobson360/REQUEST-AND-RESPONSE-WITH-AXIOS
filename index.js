var axios = require("axios") //faz a chamada ao axios

const url = "http://fakerestapi.azurewebsites.net/api/Users" // armazena a url

const data = {  // armazena o documento que será passado pela requisição
    UserName: "bobson",
    Password: "123456"
}

axios.post( url, data) // faz uma requisição POST na url e passa os dados da variavel data
.then((res) => {    // então trata o response 

    switch (res.status){// atribui um texto de acordo com o status code
        
        case 200:
        var status = 'SUCCESS'
        break

        case '404':
        var status = 'NOT FOUND'
        break

        case '400':
        var status = 'INVALID REQUEST'
        break

        case '500':
        var status = 'INTERNAL SERVER ERROR'
        break
    }

    console.log(`HTTP STATUS CODE ${res.status}: ${status}`) // imprime status code e um texto correspondente
    console.log(res.data) // imprime o response
})

