const UserServices = require("../services/userservices")

class UserController{
    static  userRegister= async(req, res, next)=>{
        try{
            const {email, gender, password, role} = req.body
            const data = await UserServices.userRegister(email, gender, password, role, next);
            res.status(201).json(data);
        } catch(err){
            next(err);
        }
    }

    static userLogin= async(req, res, next)=>{
        try{
            const {email, password} = req.body
            const data = await UserServices.userLogin(email, password, next);
            res.status(200).json(data);
        }catch(err){
            next(err);
        }
    }
}

module.exports = UserController;