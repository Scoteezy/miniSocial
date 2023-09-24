import { addNewPost } from "../../store/postsSlice"
import MyButton from "./UI/MyButton/MyButton"
import MyInput from "./UI/MyInput/MyInput"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
const AddPostModal = () => {
  const [title,setTitle] = useState('');
  const [text,setText] = useState('');
  const {id} = useSelector((store)=>store.auth.userInfo);
  const dispatch = useDispatch();
  console.log(id)
  return (
    <div className="addPost_content">
      <h1>Создать пост</h1>
      <MyInput value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Название поста"/>
      <MyInput value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Текст"/>
      <MyButton onClick={()=>dispatch(addNewPost({title,text,id}))}>Создать</MyButton>
    </div>
  )
}

export default AddPostModal