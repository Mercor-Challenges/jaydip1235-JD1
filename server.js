const express=require('express');
require('dotenv').config({path:'config.env'});
const cors=require('cors');
const morgan=require('morgan');
const app=express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true,limit:'50mb'}));

require('./db/conn');

const port=process.env.PORT || 8000;

app.use('/api/public',require('./routes/public.routes'));
app.use('/api/private',require('./routes/private.routes'));

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})