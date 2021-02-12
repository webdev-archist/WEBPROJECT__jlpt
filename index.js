const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000





app.use(express.static('public'));


app.get('/', function(req,res){
     // res.end('ok')
     res.sendFile(__dirname+'/index.html');
})


const server = app.listen(PORT, ()=>console.log('Conneted at localhost:'+PORT))