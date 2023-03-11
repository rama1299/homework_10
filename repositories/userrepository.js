const User = require("../models/User")

class UserRepository{

    static userRegister = async(email, gender, password, role, next) =>{
        
        const data = await User.userRegister(email, gender, password, role, next);
        return data;
    }

    static userLogin = async(email, password, next) =>{
        
        const data = await User.userLogin(email, password, next);
        return data;
    }
}

module.exports = UserRepository;