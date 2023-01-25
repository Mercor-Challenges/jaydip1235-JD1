const mongoose=require('mongoose');

const vehicleSchema=new mongoose.Schema({
    tollPlaza:{
        type:String,
        required:true
    },
    driver:{
        type:String,
        required:true
    },
    wheels:{
        type:String,
        required:true
    },
    sourceLocation:{
        type:String,
        required:true
    },
    destinationLocation:{
        type:String,
        required:true
    },
    probableRoute:{
        type:String
    },
    loadAdmissible:{
        type:String,
        required:true
    },
    actualLoad:{
        type:String,
        required:true
    },
    vehicleNo:{
        type:String,
        required:true
    },
    overloadStatus:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const Vehicle=new mongoose.model("vehicle",vehicleSchema);

module.exports=Vehicle;