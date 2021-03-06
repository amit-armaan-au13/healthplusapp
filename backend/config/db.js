import mongoose from 'mongoose'

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Erroe: ${error.message}`)
    }
}
export default connectDB