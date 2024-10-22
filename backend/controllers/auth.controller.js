import User from '../models/user.model.js'
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try{
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if(password != confirmPassword){
            return res.status(400).json({error: "Passwords don't match"})
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({error: "Username already exist"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPsw = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl`

         const newUser = new User({
            fullName,
            username, 
            password : hashedPsw,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
         })
         if(newUser){
            generateTokenandSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
               _id: newUser._id,
               fullName: newUser.fullName,
               username: newUser.username,
               profilePic: newUser.profilePic
            })
         }else{
            return res.status(400).json({error: "Invalid User Data"})
         }


    }catch(error){
        return res.status(500).json({error: "Internal Server Error"})
    }
}

export const login = async(req, res) => {
    try{
        const { username, password } = req.body;

        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(500).json({error: "Invalud Credentials"});
        }
        generateTokenandSetCookie(user._id, res);

        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
         });

    }catch(error){
        return res.status(500).json({error: "Internal Server Error"})
    }
}

export const logout = (req, res) => {
    try{
        res.cookie('jwt', "" , {maxAge:0});
        res.status(200).json("Logged Out successfully");
    }
    catch(error){
        return res.status(500).json({error: "Internal Server Error"});
    }
}