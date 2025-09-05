import bcrypt from "bcrypt";
import { SendErrorResponse } from "../helpers/send.error.response.js";
import jwtService from "../services/jwt.service.js";
import config from "config";
import { Author } from "../models/Author.js";

export const login = async (req,res)=>{
    try {
       const {email,password}=req.body 
       const author = await Author.findOne({where: { email: email }});       
        if (!author) {
        return SendErrorResponse({message:"Email yoki password noto'gri"},res,401)
       }
       const verifyPassword= await bcrypt.compare(password,author.password)
       if (!verifyPassword) {
        return SendErrorResponse({message:"Email yoki password noto'gri"},res,401)
       }
       const payload={
        id:author.id,
        email:author.email,
        is_active:author.is_active,
        is_creator:author.is_creator,
       }
       const tokens= jwtService.generateTokens(payload)

       const hashedRefreshToken=await bcrypt.hash(tokens.refreshToken,7)
       author.refreshToken=hashedRefreshToken;
       await author.save()
       res.cookie("refreshToken",tokens.refreshToken,{
        maxAge: config.get("cookie_refresh_token_time"),
        httpOnly:true})


       res.status(200).send({
        message:"author logged in",
        accessToken:tokens.accessToken
       })
        } catch (error) {
            console.log(error);
            
        SendErrorResponse(error,res,500)
    }
}


export const logout = async (req,res)=>{
    try {
        const {refreshToken}=req.cookies
        if (!refreshToken) {
            return SendErrorResponse({message:"No token in cookie"},res,400)
        }        
        const verifiedRefreshToken= await jwtService.verifyRefreshToken(refreshToken)
        const author =await Author.findByPk(verifiedRefreshToken.id)
        author.refreshToken=null,
        await author.save()

        res.clearCookie("refreshToken")
        res.send({
            message:"author logged out"
        })
    } catch (error) {
        SendErrorResponse(error,res,500)
    }
}

export const refreshAccessToken= async(req,res)=>{
    try {
        const {refreshToken}=req.cookies
        if (!refreshToken) {
                return SendErrorResponse({message:"No token in cookie"},res,400)
            } 
        const verifiedRefreshToken= await jwtService.verifyRefreshToken(refreshToken)
        const author =await Author.findByPk(verifiedRefreshToken.id)
        const compareRefreshToken= await bcrypt.compare(refreshToken,author.refreshToken)

        if (!compareRefreshToken) {
            return SendErrorResponse({message:"Refresh token is incorrect"},res,400)
        }

        const payload={
        id:author.id,
        email:author.email,
        is_active:author.is_active,
        is_creator:author.is_creator,
        role:"author"
       }
       const tokens= jwtService.generateTokens(payload)
              
       const hashedRefreshToken=await bcrypt.hash(tokens.refreshToken,7)
       author.refreshToken=hashedRefreshToken;
       await author.save()
       res.cookie("refreshToken",tokens.refreshToken,{
        maxAge: config.get("cookie_refresh_token_time"),
        httpOnly:true})


       res.status(200).send({
        message:"author logged in",
        accessToken:tokens.accessToken
       })
    } catch (error) {
        SendErrorResponse(error,res,500)
    }
}