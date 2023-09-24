import {useState} from 'react'
import '../App.css'
import cl from '../components/UI/MyButton/MyButton.module.css'
import Modal from '../components/UI/Modal/Modal';
import PostList from '../components/PostList';
import AddPostModal from '../components/AddPostModal';
import MyButton from '../components/UI/MyButton/MyButton';
import { useDispatch,useSelector } from 'react-redux'
import { delUser } from '../../store/usersSlice'
import { logoutUser } from '../../store/authSlice';
const UserPage = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const {id} = useSelector(store=>store.auth.userInfo)
  const openModal=()=>{
    setModal(!modal);
  }
  const deleteUser = ()=>{
    dispatch(delUser(id));
    dispatch(logoutUser());
  }
  return (
    <>
    <MyButton onClick={openModal}>Добавить пост</MyButton>
     <PostList/>
    <Modal
    visible={modal}
    setVisible={setModal}
   >
     <AddPostModal/>
   </Modal>
   <MyButton onClick={deleteUser}>Удалить аккаунт</MyButton>
    </>
   
  )
}

export default UserPage