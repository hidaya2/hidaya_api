const express = require("express")
const actress = require("./header")


const app =express()

const port = 5000

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/actressapi/v1/actress", (req,res) => {
    res.json(actress)
})
//get an actress
app.get("/actressapi/v1/actress/:name",(req,res) =>{
    res.json(actress.filter((actress) => actress.name===req.params.name))
});

app.post("/actressapi/v1/actress",(req,res) =>{
    const newa = {
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        id:req.body.id,
    };
    actress.push(newa);

    res.json(actress);

    
})
//update an actress
app.put("/actressapi/v1/actress/:name",(req,res) =>{
    const actressFound=actress.some((actress)=>actress.name===req.params.name);
    actressFound &&
    actress.forEach((actress)=> {
        actress.name===req.params.name && (
        actress.name=req.body.name,
        actress.age=req.body.age,
        actress.gender=req.body.gender    )    
    });
    res.json(actress)
})
// delete an actress
app.delete("/actressapi/v1/actress/:name",(req,res) =>{
    res.json(actress.filter((actress) => actress.name!==req.params.name))
})

app.listen(port, () => console.log(`server is running ${port}`)) 