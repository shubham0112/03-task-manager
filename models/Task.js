const mongoose=require('mongoose');

//using schema we setup a structure for all our documents(each one is having two properties name and completed)
//using constructor
const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxLength:[20,'name can not be more than 20 characters'],
    },
    completed:{
        type:Boolean,
        default:false
    }
})

//creating model and exporting it
//model is a representtion for the collection
module.exports=mongoose.model('Task',TaskSchema);