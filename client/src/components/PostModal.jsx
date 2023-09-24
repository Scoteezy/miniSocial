import cl from './UI/Modal/Modal.module.css'
import {useSelector} from 'react-redux'

const PostModal = () => {
const posts = useSelector(store => store.posts.posts);
  return (

    <div>{posts.length>0 ? posts.map((post)=>
      <div className={cl.myModal_post} key={post.id}>
          <h2 className={cl.myModal_title}>{post.title}</h2>
         <div className={cl.myModal_post__content}>{post.content}</div></div>
      ) : <p>Посты не найдены</p>}</div>
  )
}

export default PostModal