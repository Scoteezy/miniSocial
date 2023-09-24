import cl from './Nav.module.css'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import MyButton from '../MyButton/MyButton'
import { logoutUser } from '../../../../store/authSlice'
import logo from '../../../assets/logo.jpg'
const Nav = () => {
  const dispatch = useDispatch();
  const {auth,userInfo} = useSelector(store => store.auth)
  console.log(auth)
  return (
    auth?
    <div className={cl.nav}>
      <div className={cl.user}>
        <img src={logo} alt="" />
      <div className={cl.nickname}>
         {userInfo.login}
        <Link className={cl.nav__link } to='/user'>MyPosts</Link>
      </div>
        
        </div>
        <Link to='/users'>News feed</Link>
        <div className={cl.reg}>
        <MyButton onClick={()=>dispatch(logoutUser())}>Log Out</MyButton>
        </div>
    </div>: <div></div>
  )
}

export default Nav