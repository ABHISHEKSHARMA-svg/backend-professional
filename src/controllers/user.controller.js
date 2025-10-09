import {asyncHandler} from '../utils/asyncHandler.js';

const registerUser = asyncHandler(async(req , res) =>{

    res.status(200).json({
        message:"abhishek sharma you have done own work"
    })
})




export {registerUser}