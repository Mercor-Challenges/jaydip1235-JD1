const Vehicle=require('../models/Vehicle');

// Add vehicle
exports.addVehicle=async(req,res)=>{
    try {
        // {tollPlaza,driver,wheels,sourceLocation,destinationLocation,probableRoute,loadAdmissible,actualLoad,vehicleNo}
        let data=req.body;
        let valid=true;
        for(const key in data){
            if(!data[key].trim()) valid=false;
        }
        if(Object.keys(data).length<9) valid=false;
        if(!valid) res.status(400).json({error:"All the details should be entered properly!"});
        else{
            if(data.actualLoad>data.loadAdmissible) data.overloadStatus=true;
            const vehicle=new Vehicle(data);
            await vehicle.save();
            res.status(201).json({messsage:"Vehicle added!"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

// Search a vehicle
exports.searchVehicle=async(req,res)=>{
    try {
        const {vehicleNo}=req.params;
        const vehicles=await Vehicle.find({vehicleNo:vehicleNo}).sort({createAt:-1});        
        // console.log(vehicles);
        if(vehicles.length>0) res.status(200).json({vehicles});
        else res.status(400).json({error:"No vehicle found!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

