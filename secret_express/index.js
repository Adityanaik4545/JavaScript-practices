import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url";


const folder_name=dirname(fileURLToPath(import.meta.url))
const app=express();
const port=3000;
let userIsAuthorised=false;

app.use(express.urlencoded({extended:true}))

function checkpassword(req,res,next){
    const password=req.body["password"]
     if (password==="codeUntilyouSweat") {
     userIsAuthorised=true;
  }
  next()
}

app.use(checkpassword)

app.get("/",(req,res)=>{
    res.sendFile(folder_name+"/public/index.html")
})
app.post("/check",(req,res)=>{
 if (userIsAuthorised) {
     res.sendFile(folder_name+"/public/secret.html")
 } else {
     res.redirect("/")
 }
})
app.listen(port,(req,res)=>{
    console.log(`server ${port} is live`);
    
})