var axios = require("axios")

const url = "http://fakerestapi.azurewebsites.net/api/Users"

const data = {
    UserName: "bobson",
    Password: "123456"
}

axios.post( url, data)
.then(function(res){

    switch (res.status){
        
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

    console.log(`HTTP STATUS CODE ${res.status}: ${status}`)
    console.log(res.data)
})

