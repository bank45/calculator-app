const express = require('express')
const app = express()
const router = express.Router()


app.listen(3000, function(){
    console.log('app listening on port 3000')
})

app.use(express.static(__dirname + '/public'))


router.get('/', function(req, res){
    res.send('/')
})

// router.get('/calculator', function(req,res){
//     console.log("app.get('/calculator)")
//    // res.render('calculator')
// })

app.use('/', router)

