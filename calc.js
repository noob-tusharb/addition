const express=require("express")
const bodyParser=require("body-parser")

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html")
});
app.post("/",function(req,res)
{
  var a=Number(req.body.num1)
  var b=Number(req.body.num2)
  console.log(a);
  console.log(b);
  var result=a+b;


  res.send("ans id="+result);
});
app.listen(3000,function()
{
  console.log("running");
})
