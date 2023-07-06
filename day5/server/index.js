import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose'
import clientRouter from './router/client.js'
import productRouter from './router/product.js'
import orderRouter from './router/order.js'
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Api is working!!');
})
app.use('/auth', clientRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)
try {
    mongoose.connect('mongodb+srv://dtanwer:123123123@ecommerce.cnzfdk7.mongodb.net/ecommerce?retryWrites=true&w=majority');
    console.log("Connected to MongoDb")
} catch (error) {
    console.log(error)
    throw error
}

app.listen(5000, () => {
    console.log('server is Working!! 5000');
})
