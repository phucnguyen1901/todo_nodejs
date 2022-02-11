import queries from '../configs/queries_db.config.js'
import db from '../configs/db.config.js'


const LoginUserService = async (username,password) => {
    try {
        let user = await db.query(queries.loginUser,
        [ username, password ])
        if(user.rows.length > 0){
            return true;
        }
        return false;      
    } catch (error) {
        console.log(error.stack)
        console.log("Login failed");
        return false;
    }
}

const RegisterUserService = async (fullname, username,password) => {
    try {
        let checkUserExist = await CheckUserExist(username);
        if(checkUserExist){
            return "Exist";
        }
        // await db.query(queries.registerUser,
        // [ fullname, username, password ])
        return true;
    } catch (error) {
        console.log(error.stack)
        console.log("Login failed");
        return false;
    }
}

const CheckUserExist = async (username) => {
    try {
        
        let user = await db.query(queries.checkUserExist,
        [ username ])

        if(user.rows.length > 0){
            console.log("USER: "+user.rows.length)
            return true;
        }
        return false;
    } catch (error) {
        console.log(error.stack)
        console.log("Login failed");

    }
}

export { LoginUserService, RegisterUserService}







