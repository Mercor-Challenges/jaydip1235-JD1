const User=require('../models/User');

// Create user
exports.createUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        let user=new User({email,password});
        await user.save();
        res.status(201).json({messsage:"User created!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

// Login
exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user) res.status(400).json({error:"Invalid credentials!"});
        else{
            let result=await user.comparePasswords(password);
            if(result===false) res.status(400).json({error:"Invalid credentials!"});
            else{
                let token=await user.generateToken();
                res.status(200).json({token});
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}