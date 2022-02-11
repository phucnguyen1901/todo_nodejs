
import { LoginUserService, RegisterUserService } from '../services/user.service.js';


const userController = {

    async loginPage(req,res){
        res.render('login');
    },

    async registerPage(req,res){
        res.render('register', {error: req.flash("error")});
    },

    async loginUser(req,res){
        const { username, password } = req.body; 

        try {
            const checkLogin = await LoginUserService(username, password)
            if(checkLogin){
                console.log("Login successfully")
                // req.flash("message", "You have successfully registered !")
                // res.redirect("/login")
                return res.render("home")
            }

            req.flash("error", "Login Failed !")
            req.flash("username", username)

            return res.redirect("/login")
            

        } catch (error) {
            req.flash("error",  "Login Failed !")
            res.redirect("/login")
        }
    },

    async registerUser(req,res){
        const {fullname, username, password } = req.body; 
        let check = fullname.trim() !== "";
        console.log("CHECK: "+check)
        if(check){
            console.log("GOOD");
        }


        try {
            if( fullname.trim() !== "" && username.trim() !== "" && password.trim() !== ""){
                req.flash("error", "Empty field")
                console.log("Da vao day")
                return res.redirect("/register")
            }

            const checkRegister = await RegisterUserService(fullname, username, password)
            if(checkRegister == "Exist"){
                console.log("TON TAI")
                req.flash("error", "Username already exist")
                return res.redirect("/register")
            }
            if(checkRegister){
                req.flash("success", "Register Successfully !")
                return res.redirect("/register")

            }

            req.flash("error", "Unknown Error !")
            return res.redirect("/register")
            

        } catch (error) {
            console.log(error)
            req.flash("error", "You have failed to register !")
            res.redirect("/register")
        }

    }
}
export default userController;


