var express = require ("express");
var app=express();
var cookieParser =require("cookie-parser");
var logger =require("morgan");
var createError = require ("http-errors")
var cors=require("cors")
var bodyParser=require ("body-parser")
var nodemailer=require("nodemailer")


app.use(logger("dev"));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())

var data= require('./db.json')




app.get("/data", function(req,res){
    res.json(data);
})


app.post("/contact", function(req,res){
    var query1=req.body.formValues.name
    if(req.body.formValues.phone===undefined){
        var query5=" "
    }else{
        var query5=req.body.formValues.phone
    }
    var query2=req.body.formValues.email
    var query3=req.body.formValues.subject
    var query4=req.body.formValues.description
    
    
    var transporter=nodemailer.createTransport({
        service:"gmail",
        secure:false,
        port:25,
        auth:{
            user:"ecoplastex.kontakt@gmail.com",
            pass:"ecoplastex12345"
            }
        })
    const mailOptions={
        from:"",
        to:"veljkorankovic@gmail.com",
        subject:query3,      
        html:"<h2>"+query3+"</h2>"+ "<p>"+query4+"</p>"+"<br><h3>"+query1+"</h3>"+"<h4>Email pošiljaoca: "+query2+"</h4>"+"<h4>Telefon: "+query5
        }
    transporter.sendMail(mailOptions,function(err,info){
        if(err)
        console.log(err)
        else
        console.log(info)
    })
    res.send("poruka poslata")
})





app.listen(3001, function(){
    console.log("SERVER STARTED")
})