import {User} from "../models/user/user.model.js";

export const getUserDetails = async(req, res) => {
    try{
        const { id } = req.user;
        const record = await User.findById(id);
        return res.status(200).json(user);
    }
    catch(error){
        return res.status(500).json({ message : "Internal Server Error"});
    }
}

// export const getUserURLs = async(req, res) => {
//     try{
//         const { id } = req.user;

//         return res.status(200).json();
//     }
//     catch(error){
//         return res.status(500).json({ message : "Internal Server Error"});
//     }
// }