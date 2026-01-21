// npm init -y
// npm install nodemon --global
// changed scripts -> test in package.json
// npm install express dotenv mongoose
// create .env file and paste your db connection string
// import modules and connnect to mongodb 
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.static('public'));
const PORT=process.env.PORT || 3000

const Blog = require('./modules/Blog')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/blogs', async(req,res)=>{
    try{
        const newBlog=new Blog({
            title: req.body.title,
            body: req.body.body,
            author: req.body.author
        });
        const saved= await newBlog.save();
        res.status(201).json(saved)

    }
    catch(error){
        res.status(404).json({message:error.message})
    }
});

app.get('/blogs',async (req,res)=>{
    try{
        const blogs=await Blog.find();
        res.status(200).json(blogs);
    }
    catch (error) {
        res.status(500).json({message:"error",error: error.message});
    }
});

app.get('/blogs/:id', async(req,res)=>{
    try{
        const blogId=req.params.id;
        const blog=await Blog.findById(blogId);
        if(!blog){
            return res.status(404).json({message:"there is no blog in this id"});
        }
        res.status(200).json(blog);
    }
    catch(error){
        res.status(500).json({message:"no id",error: error.message});
    }
});

app.put('/blogs/:id',async(req,res)=>{
    try{
        const update=await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}
        );
        if(!update){
            return res.status(404).json({message:"no blog in this id"});
        }
        res.status(200).json(update);
    }
    catch(error){
        res.status(500).json({message:"error bro",error:error.message});
    }
});


app.delete('/blogs/:id',async(req,res)=>{
    try{
        const deleted = await Blog.findByIdAndDelete(req.params.id);
        if (!deleted){
            return res.status(404).json({message:"there is no blog in this id"});
        }
        res.status(200).json({messege:"this blog have deleted now"});
    }
    catch(error){
        res.status(400).json({message:"error bro",error: error.message});
    }
});



app.get('/', (req, res) => res.send("App works!"))



mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB")

        app.listen(PORT, () => console.log(`Running on http://localhost:3000`))
    })
    .catch(err=>console.log("eror: ",err))





























  