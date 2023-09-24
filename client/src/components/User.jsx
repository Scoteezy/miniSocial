import MyButton from './UI/MyButton/MyButton'
const User = ({id, name,setVisible}) => {
  return (
    <div className='user'>
        <span className='user__name'>{name} #{id}</span> 
        <MyButton onClick={()=>{setVisible(id)}}>Посмотреть посты</MyButton>
    </div>
  )
}

export default User