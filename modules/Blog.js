const mongoose=require("mongoose");
const schema=new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    author:{type:String,default:"anon"}
},{timestamps:true});

module.exports=mongoose.model('Blog',schema);