const  express =require('express');
const cors= require('cors')
const authRouter= require('./routers/auth/auth')

const app=express();
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Äpi is working')
})

app.use('/auth',authRouter);


app.listen(5000,()=>{
    console.log('server is Running at 5000');
})