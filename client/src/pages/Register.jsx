import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../../store/usersSlice';
import MyButton from '../components/UI/MyButton/MyButton';
import MyInput from '../components/UI/MyInput/MyInput';
const Register = () => {
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const register =()=>{
        if(login.length>=4 && password.length>=3){
            dispatch(addNewUser({login,password}));
            navigate('/login');
        }else{
            setError("Логин должен быть длиннее 4х символов и пароль длиннее ")
        }
     
    }
    return (
      <div className='login'>
        <div className='login__content'>
        <h1>Register Page</h1>
        <MyInput value={login} onChange={(e)=>{setLogin(e.target.value)}} placeholder="login"/>
        <MyInput type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/>
        <MyButton onClick={()=> register()}>Зарегистрироваться</MyButton>
        {error.length>1 ? <div>{error}</div>:<div></div> }
       
        <Link to="/login">Or Login</Link>
        </div>
        
      </div>
    )
}

export default Register