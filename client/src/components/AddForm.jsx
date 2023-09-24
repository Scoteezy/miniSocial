import {useState} from 'react'
import MyButton from './UI/MyButton/MyButton'
import MyInput from './UI/MyInput/MyInput';
import { addNewUser } from '../../store/usersSlice';
import { useDispatch } from 'react-redux';
const AddForm = () => {
    const dispatch = useDispatch();
    const [login,setLogin] = useState('');
    const [password, setPassword] = useState('');
    const add = (e)=>{
        e.preventDefault();
        dispatch(addNewUser({login,password}));
    }
  return (
    <div className='user__form'>
      <MyInput value={login} onChange={(e)=>setLogin(e.target.value)} placeholder='Имя пользователя'/>
      <MyInput value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Фамилия пользователя'/>
      <MyButton onClick={(e)=>{add(e)}}>Добавить</MyButton>
    </div>
  )
}

export default AddForm