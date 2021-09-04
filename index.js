// this is host file 
const { response } = require('express');
const express=require('express');
const Datastore =require('nedb')


const app=express();
app.listen(3000,()=>console.log("listening at 3000"));
app.use(express.static('public'))
const database =new Datastore('database.db');
database.loadDatabase();

app.use(express.json({limit: '1mb'}))


app.get('/api',(request ,response)=>
{
    database.find({},(err,data)=>{
        if(err){response.end();
            console.log("error")
        return;}
        response.json(data);

    })

});




app.post('/api', ( request,  response  )=>{ 
    const data=request.body;
    console.log(request.body);
     database.insert(data);
     console.log(data);
     response.json(data);
    });

   