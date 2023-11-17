const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5007

app.use(cors())
app.use(express.json())
app.use('/api/user',require('./routes/user'))
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(PORT,()=>{
    console.log(`Backend Server is Started at ${PORT}`)
})