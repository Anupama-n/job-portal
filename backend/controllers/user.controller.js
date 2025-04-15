
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";

export const register = async (req , res) => {
    try{
        const {fullname, email, phoneNumber, password, role} = req.body;
        console.log(fullname, email, phoneNumber, password, role);
        
        if (!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message: "Please enter your credentials properly",
                success: false
            })
        };
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message: "User exists with this email",
                success: false,
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role,
            profile: {
                
            }
        })
        return res.status(200).json({
            message: "Account created successfully",
            success:true
        })
    }catch(error){
        console.log(error)
    }
}
export const login = async (req, res) => {
    try {
        const {email, password, role} = req.body;
    
        

    
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Please enter your credentials properly",
                success: false
            });
        }

        
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account does not exist with the current role",
                success: false,
            });
        }

        const tokenData = { userId: user._id };
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200).cookie("token", token, {
            maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
            httpOnly: true,
            sameSite: 'strict'
        }).json({
            message: `Welcome Back ${user.fullname}`,
            user,
            success: true
        });
    } catch (error) {
        console.error(error); 
        res.status(500).json({
            message: "Something went wrong",
            success: false
        });
    }
};


export const logout = async(req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message:"Logged out successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;

        const userId = req.id;
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            });
        }

        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;

        if (skills) {
            let parsedSkills = skills;
            if (typeof skills === 'string') {
                try {
                    parsedSkills = JSON.parse(skills);
                } catch (e) {
                    parsedSkills = skills.split(',').map(skill => skill.trim());
                }
            }
            user.profile.skills = parsedSkills;
        }

        if (file) {
            const fileUri = getDataUri(file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
                resource_type: "raw",
                folder: "resumes",
                type: "upload"
            });

            if (cloudResponse) {
                user.profile.resume = cloudResponse.secure_url;
                user.profile.resumeOriginalName = file.originalname;
            }
        }

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200).json({
            message: "Profile updated successfully",
            user,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            success: false
        });
    }
};
