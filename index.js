'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config.js');
const Routes = require('./routes.js');
const MovieData = require("./movieData.json")

const app = express();
const Port = process.env.PORT || config.port
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', Routes.routes);
// app.use('/', (req,res)=>{
//     res.send("Server is Running")
// });
app.get('/movieData', (req, res) => {
    res.send(MovieData);
})



app.listen(Port, () => console.log('🤖🦻App is listening on url http://localhost:' + Port));
