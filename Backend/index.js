const connectToMongo=require('../Backend/DBConnection');
connectToMongo();

const express=require('express');

const app=express();
const port=3001;

app.use(express.json());

app.use('/admin',require('../backend/routes/Admin'));
app.use('/user',require('../backend/routes/User'));

app.listen(port,()=>{
    console.log(`Listening to port:${port}`);
})
