const express= require('express')
const cors = require('cors');
const app = express()
app.use(cors())
app.get('/backend',(req,res)=>{
    res.send('This is working fine')
})

app.listen(4000,()=>{
    console.log('The server is runnning')
})