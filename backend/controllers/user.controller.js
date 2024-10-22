import User from '../models/user.model.js'

export const getUsersForSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id;
        const AllUsers = await User.find().select("-password");
        
        res.status(200).json(AllUsers);
    }catch(error){
        console.log("Error in get user contoller : ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};