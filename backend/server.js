import express from'express'
import dotenv from'dotenv'
// import products from'./data/products.js'
import connectDB from './config/db.js'


import productRoutes from './routes/productRoutes.js'


dotenv.config()
const app = express()

connectDB()
app.get('/',(req,res)=>{
    res.send("health check done...")
})

app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server running on ${PORT}`))