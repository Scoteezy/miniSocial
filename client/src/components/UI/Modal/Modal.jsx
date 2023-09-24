import cl from './Modal.module.css'
const MyModal = ({visible, setVisible,children}) => {
    const rootClasses =[cl.myModal]
    if(visible){
        rootClasses.push(cl.active);
    }
 
  return (
    <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
        <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}> 
            {children}
        </div>  
    </div>
  )
}

export default MyModal