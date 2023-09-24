import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Post from './Post'
import { fetchAllPostsById } from '../../store/postsSlice'
const PostList = ({openModal}) => {
    const posts = useSelector(store => store.posts.posts)
    const {id} = useSelector((store)=>store.auth.userInfo);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch( fetchAllPostsById(id))
        console.log(posts)
    },[dispatch])
    return (
      <div className='posts__container'>
      {posts.map((post)=>
        <Post key={post.id} id={post.id} openModal={openModal} title={post.title} text={post.content}/>
        )}
      </div>
    )
}

export default PostList