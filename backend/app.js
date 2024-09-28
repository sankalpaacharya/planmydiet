import express from "express";
import bodyParser from 'body-parser';

import web from './routes/web.js';

const app = express()
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({limit: '10mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',web);


app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`);
});