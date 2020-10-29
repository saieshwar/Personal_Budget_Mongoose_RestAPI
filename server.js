
const express = require('express');
const mongoose = require('mongoose');
const budgetRoute = require('./routes');
const cors = require('cors');
const app = express();
const port = 3000;

let url = 'mongodb://localhost:27017/mongodb_demo';
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true } )
        .then( ()=>{
            console.log("connected to database");
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })
//PORT=8000 node server.js


app.use(cors());
app.use(express.json());
const fs = require('fs');

//app.use('/', express.static('public'));

//Reading from JSON file
// let rawdata = fs.readFileSync('myBudget.json');
// let my_budget = JSON.parse(rawdata);



// app.get('/', (req,res) => { 
//     res.send('');
// });

// app.get('/budget', (req, res) =>{
//     res.json(budget); 
// });


//sending response as a json
// app.get('/budget', (req, res) =>{
//     res.json(my_budget); 
// });

app.use('/budget',budgetRoute);


app.listen(port, () => {
    console.log('API Served and  listening at http://localhost:'+port);
});











//references
// const budget = {
//     myBudget: [
//     {
//         title: 'Eat out',
//         budget: 25
//     },
//     {
//         title: 'rent',
//         budget: 375
//     },
//     {
//         title: 'grocery',
//         budget: 110
//     },
//   ]
// };