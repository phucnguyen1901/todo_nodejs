import db from '../configs/db.config.js'

const homeController = {

    async addTodo(req,res){

        try {
            await db.connect();
            await db.query(`INSERT INTO users(fullName,userName,userPW) values($1,$2,$3)`,
            ["NGUYEN TRONG PHUC","ntphuc","000001"])
            await db.end();
            console.log("add user successfully");
          
        } catch (error) {
            console.log(error.stack)
            console.log("add user failed");

        }
        res.redirect('/')
    },

    async getMyTodoList(req,res){
        try {
            await client.connect();
            await client.query(`INSERT INTO users(fullName,userName,userPW) values($1,$2,$3)`,
            ["NGUYEN TRONG PHUC","ntphuc","000001"])
            await client.end();
            console.log("add user successfully");
          
        } catch (error) {
            console.log(error.stack)
            console.log("add user failed");

        }
        res.send("My TodoList");


    }
}
export default homeController;








