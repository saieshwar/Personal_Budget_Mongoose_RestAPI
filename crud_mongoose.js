const mongoose = require('mongoose');
const namesModel = require('./models/names_schema')

let url = 'mongodb://localhost:27017/mongodb_demo';
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true } )
        .then( ()=>{
            console.log("connected to database");
            //List all entries
            // namesModel.find()
            //             .then((data) => {
            //                     console.log(data);
            //                     mongoose.connection.close();
            //             })
            //             .catch((connectionError)=> {
            //                 console.log('connection Error');
            //             }) 

            //fetch one document
            
            // namesModel.findOne({id: 2})
            //                 .then((data) => {
            //                         console.log(data);
            //                         mongoose.connection.close();
            //                 })
            //                 .catch((connectionError)=> {
            //                     console.log('connection Error');
            //                 })
           
            //Fetch by id

            // namesModel.findById('5f9887ee64c6083a165d8eba')
            //                 .then((data) => {
            //                         console.log(data);
            //                         mongoose.connection.close();
            //                 })
            //                 .catch((connectionError)=> {
            //                     console.log('connection Error');
            //                 })


            //let newData = new namesModel({id : 10, name : 'testing the new data in mongoose'});
            
            // namesModel.insertMany(newData)
            //                 .then((data) => {
            //                         console.log(data);
            //                         mongoose.connection.close();
            //                 })
            //                 .catch((connectionError)=> {
            //                     console.log('connection Error');
            //                 })

            //Update
            // let newData = {$set: {id : 11, name : 'testing the new data in mongoose'}};
            // namesModel.update({id: 123},newData)
            //                 .then((data) => {
            //                         console.log(data);
            //                         mongoose.connection.close();
            //                 })
            //                 .catch((connectionError)=> {
            //                     console.log(connectionError);
            //                 })

            //Remove

            
            namesModel.deleteOne({id: 11})
                            .then((data) => {
                                    console.log(data);
                                    mongoose.connection.close();
                            })
                            .catch((connectionError)=> {
                                console.log(connectionError);
                            })


           
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })

        //fetch one document
