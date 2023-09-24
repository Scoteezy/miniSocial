import MyInput from '../components/UI/MyInput/MyInput'
import MyButton from '../components/UI/MyButton/MyButton'
import {useDispatch} from 'react-redux';
import { useState } from 'react'
import { setUserAuth } from '../../store/authSlice';
import { Link } from 'react-router-dom';
const Login = () => {
  const dispatch= useDispatch();
  const [login,setLogin] = useState('');
  const [password,setPassword] = useState('');
  return (
    <div className='login'>
      <div className='login__content'>
      <h1>Login Page</h1>
      <MyInput value={login} onChange={(e)=>{setLogin(e.target.value)}} placeholder="login"/>
      <MyInput type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/>
      <MyButton onClick={()=>dispatch(setUserAuth({login,password}))} >Войти</MyButton>
      <Link to="/register">Or Register</Link>
      </div>
      
    </div>
  )
}

export default Login