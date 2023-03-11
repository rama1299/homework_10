const pool = require('../config/config');

class User{

    static userRegister = async (email, gender, password, role, next)=>{
        const insertUser = 
        `INSERT INTO users (email, gender, password, role)
        VALUES ($1, $2, $3, $4);`
        try{
            const data = await pool.query(insertUser, [email, gender, password, role])

            return data.rows
        } catch(err){
            next(err)
        }
    }

    static userLogin = async (email, password, next)=>{
        const selectUser = 
        `SELECT * FROM users WHERE email = $1;`
        try{
            const data = await pool.query(selectUser, [email])
            return data.rows
        }catch{
            next(err)
        }
    }
}

module.exports = User;