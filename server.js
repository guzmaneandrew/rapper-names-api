const { response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': "Shéyaa Bin Abraham-Joseph",
        'birthLocation': "Longon, England"        
    },
    'chance the rapper': {
        'age': 29,
        'birthName': "Chancelor Bennett",
        'birthLocation': "Chicago, Illinois"        
    },
    'dylan': {
        'age': 28,
        'birthName': "Dylan",
        'birthLocation': "Dylan"        
    },
}

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res)=>{
    const rapperName = req.params.rapperName.toLowerCase()
    
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['dylan'])
    }
})