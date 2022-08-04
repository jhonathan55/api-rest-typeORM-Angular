import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import * as jwt from 'jsonwebtoken';
import config from "../config/config";

class AuthController{

    static login = async (req:Request, res: Response)=>{
      const {username, password}= req.body;
      if(!(username && password)){
        return res.status(400).json({
            message:'username && password are required'
        })
      }
      const authRepository= AppDataSource.getRepository(User);
      let user:User;
      try {
        user = await authRepository.findOneOrFail({
            where:{
                username
            }
        })
      } catch (error) {
        return res.status(452).json({
            message:'user incorrect'
        })
      }

      if(!user.checkPassword(password)){
        return res.status(452).json({
          message:'password incorrect'
        })
      }
      //import jwt
      const token = jwt.sign({
        userId:user.id,
        username
      },
      //import config (create)
      config.jwtSecret,{
        expiresIn:'1h'
      })
      
      return res.setHeader('auth',token).status(200).json({
        message:'ok',token,username
      })
    }
}
export default AuthController;