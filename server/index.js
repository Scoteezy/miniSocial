const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

const PORT = process.env.PORT || 8080;
const app =express();
const start = async ()=>{
  try{
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());
    app.use('/api', userRouter);
    app.use('/api', postRouter);
    app.get('/api/test', function (_, res) {
        res.json({msg: 'This is CORS-enabled for a Single Route'})
      })
    app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))    
  }catch(e){ console.log(e)
  }
}
start();
