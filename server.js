const express = require("express")
const tableRouter=require('./routes/table')
const app=express()
var MongoClient= require('mongodb').MongoClient;

app.set('view engine','ejs')
app.use('/table',tableRouter)
app.get('/',function(req,res){
    var url ="mongodb://localhost:27017"
    MongoClient.connect(url,function(err,client){
        useNewUrlparser:true

        var dbo =client.db('mytable')
        dbo.collection("studentcourses").find({}).toArray(function(err,items){
            if(err) console.log("")
            res.render('table/index',{items:items})
        })




        
    });


});
app.listen(4000)
