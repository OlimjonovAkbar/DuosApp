import express from 'express'
import { config } from 'dotenv'




//app config
const app = express()
config()


app.get('/', (req,res) => {
    res.send('server worked')
})



app.listen(process.env.PORT, () => console.log(`> Server worked on ${process.env.PORT}`))
