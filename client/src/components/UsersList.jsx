import { useSelector } from 'react-redux';
import User from './User';
const UsersList = ({setVisible,setId}) => {
  const users = useSelector(store => store.users.users)
  const {id} = useSelector(store => store.auth.userInfo)
  return (
    <div className='users__container'>
    {users.map((user)=>
      {if(user.id !== id){
        return(<User setVisible={setVisible} setId={setId} key={user.id} id={user.id} name={user.login}/>)
      }}
      )}
    </div>
  )
}

export default UsersList