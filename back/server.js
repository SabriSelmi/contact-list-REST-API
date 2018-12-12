const express=require("express");
const {MongoClient, ObjectID}=require("mongodb");
const bodyParser=require("body-parser");
const assert=require("assert");

const app=express();
app.use(bodyParser.json());

const mongo_url="mongodb://localhost:27017";
const database="contact";

MongoClient.connect(mongo_url,{ useNewUrlParser: true },(err,client)=>{
assert.equal(err,null,"data base connexion failed");

const db=client.db(database)

        app.get('/contact-list',(req,res)=>{
        db.collection("contactList").find().toArray((err,data)=>{
        if (err)
            console.log("can't fetch data");
        else res.send(data);
        })
        })


        app.post("/add-contact",(req,res)=>{
            let newContact=req.body
            db.collection("contactList").insertOne(newContact,(err,data)=>{
                if (err)
                    res.send("Can't add contact")
                else res.send("Contact added successfully")
            })
        })


        app.put("/modify-contact/:id",(req,res)=>{
            let id=ObjectID(req.params.id)
            let updatedContact=req.body
            db.collection("contactList").findOneAndUpdate({_id:id},{$set:{...updatedContact}},(err,data)=>{
                if (err)
                    res.send("can't update movie")
                else res.send(data)
            })
        })


    app.get('/contact-list/:id',(req,res)=>{
        let ContactId=ObjectID(req.params.id);
        db.collection("contactList").findOne({_id:ContactId},(err,data)=>{
            if (err) console.log("can't fetch Contact");
            else res.send(data)
        });
    })

    app.delete('/contact-list/:id',(req,res)=>{
        const id=ObjectID(req.params.id);


        db.collection("contactList").findOneAndDelete({_id:id},(err,data)=>{
            if (err)
                res.send("Can't delete contact");
            else {
                res.send("Contact successfully deleted")

            }

        })


    })



});


app.listen(3007,err=>{
if (err)
    console.log(err)
    else
        console.log('Your server is running on port 3007')
});
