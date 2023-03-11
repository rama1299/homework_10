const UserRepository = require("../repositories/userrepository")

class UserServices{

    static userRegister = async(email, gender, password, role, next) =>{
        
        const data = await UserRepository.userRegister(email, gender, password, role, next);
        return data;
    }

    static userLogin = async(email, password, next) =>{

        const data = await UserRepository.userLogin(email, password, next);
        return data;
    }
}

module.exports = UserServices