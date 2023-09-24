const db = require("../db");

class UserController { 
    async createUser(req,res){ 
        const {login, password} = req.body;
        const role = 'user';
        const person = await db.query('SELECT * FROM person where login = $1',[login]);
        if(!person.rows[0]){
            const newPerson = await db.query(`INSERT INTO person(password, role, login) values ($1,$2,$3) RETURNING *`, [password, role, login]);
            res.json(newPerson.rows[0])
        }else{
            res.json("Пользователя с данным логином уже существует")

        }
    }
    async getUsers(req,res){
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async authUser(req,res){
        const login = req.query.login;
        const password = req.query.password;
        const user = await db.query('select * from person where login=$1 and password=$2',[login, password]);
        res.json(user.rows[0]);
    }
    async updateUser(req,res){
        const {id,login,password,role} = req.body;
        const user = await db.query('UPDATE person set login = $1, password = $2, role=$4 WHERE id = $3 RETURNING *', 
        [login,password,id,role]
        )
        res.json(user.rows[0])
    }
    async deleteUser(req,res){
        try{
            const id = req.params.id;
            const post = await db.query('DELETE FROM post where user_id=$1',[id]);
            const user = await db.query('DELETE FROM person where id = $1',[id]);
            res.json(user.rows[0]);
        }catch(e){
            console.log(e.detail)
        }
        
    }
}
module.exports = new UserController()