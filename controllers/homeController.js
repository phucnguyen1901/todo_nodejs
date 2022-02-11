
import client from '../configs/db.config.js'


const homeController = {

    async getHome(req,res){

        await client.connect();
        const result = await client.query('SELECT * from users')
        console.log(result.rows) // Hello world!
        await client.end();
        res.send("My Home");
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



