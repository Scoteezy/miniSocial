const db = require("../db");
class PostController {
    async createPost(req,res){
        try{
            const {title, content, userId} = req.body;
            const userExist = await db.query('select * from person where id=$1',[userId])
            if(userExist){
                const newPost = await db.query(`INSERT INTO post(title, content,user_id) values ($1,$2,$3) RETURNING *`, [title, content,userId]);
                res.json(newPost.rows[0])

            }else{
           throw new Error
            }
        }catch(e){
            res.json("Пользователя с данным id не существует")
        }
    }
    async getPostsByUser(req,res){
        try{
            const id = req.query.id;
            const posts = await db.query(`select * from post where user_id = $1` ,[id])
            res.json(posts.rows)
        }catch(e){
            
        }
    }
    async deletePost(req,res){
        try{
            const id = req.params.id;
            const user = await db.query('DELETE FROM post where id = $1',[id]);
            res.json(user.rows[0]);
        }catch(e){
            console.log(e.detail)
        }
        
    }
}
module.exports = new PostController()