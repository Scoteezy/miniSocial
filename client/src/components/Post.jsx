import MyButton from "./UI/MyButton/MyButton"
import { useDispatch } from "react-redux"
import { delPost } from "../../store/postsSlice";
const Post = ({title,text,id}) => {
    const dispatch = useDispatch();
  return (
       <div className='post' >
            <div className="post__content">
            <h2 className={'post__title'}>{title}</h2>
            <div className={'post__text'}>{text}</div>
            </div>

            <MyButton onClick={()=>dispatch(delPost(id))}>Удалить Запись</MyButton>
        </div>
  )
}

export default Post
