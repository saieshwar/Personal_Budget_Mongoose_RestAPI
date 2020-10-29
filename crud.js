const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/mongodb_demo';


// 1 - connect to database
// 2. perform the desired operation
// 3. Close db conn 
mongoDBClient.connect(url,{ useUnifiedTopology: true }, (operationError, dbHandler)=>{
    if(operationError){
        console.log("An error ha appeared during connection");
    } else {
        //Insert operation
        console.log("Connected to database");
        // let data = {id : 10, name: "Added a new name from mongodb native driver"};
        // dbHandler.db('mongodb_demo').collection('names').insertOne(data, (operror,opresult)=>{
        //     if(operror){
        //         console.log("Unable to insert data into our collections");
        //     } else {
        //         console.log("Insert successfully");
        //        // dbHandler.close();
        //     }

        // });

        //List operation**********


        // dbHandler.db('mongodb_demo').collection('names').find().toArray((operror, opresult)=>{
        //     if(operror){
        //         console.log(operror);
        //     }
        //     else {
        //         for(var i =0; i < opresult.length;i++){
        //             console.log(opresult[i]); 
        //         }
        //         dbHandler.close();
        //     }
        // });

        //List 1 item **************

        
        // dbHandler.db('mongodb_demo').collection('names').findOne({id : 1}, (operror, opresult) => {
        //     if(operror){
        //          console.log(operror);
        //     }
        // else {
            
        //         console.log(opresult); 
            
        //     dbHandler.close();
        // }
        // });

        //Update Operation

        // let newData = {$set : {id : 11, name: "Added a new name from mongodb native driver"}};
        // dbHandler.db('mongodb_demo').collection('names').updateOne({id:1},newData, (operror, opresult) => {
        //     if(operror){
        //          console.log('Unable to upadate data into your collection');
        //     }
        // else {
            
        //         console.log('Updated successfully'); 
            
        //     dbHandler.close();
        // }
        // });

        // single Delete Operation

        // dbHandler.db('mongodb_demo').collection('names').deleteOne({id:10}, (operror, opresult) => {
        //         if(operror){
        //              console.log('Unable to Delete data into your collection');
        //         }
        //     else {
                    
        //             console.log('Deleted successfully'); 
                
        //         dbHandler.close();
        //     }
        // });

        //bulk delete

        dbHandler.db('mongodb_demo').collection('names').deleteMany({id:10}, (operror, opresult) => {
            if(operror){
                 console.log('Unable to Delete data into your collection');
            }
        else {
                
                console.log('Deleted successfully'); 
            
            dbHandler.close();
        }
    });

    }

});

