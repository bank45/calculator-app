const express = require('express')
const app = express()

app.listen(3000, function(){
    console.log('app listening on port 3000')
})

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.download('/')
})


