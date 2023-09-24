import { useState } from 'react'
import UsersList from '../components/UsersList';
import Modal from '../components/UI/Modal/Modal';
import '../App.css'
import { useFetch } from '../hooks/useFetch';
import PostModal from '../components/PostModal';

function Users() {
  const [modal, setModal] = useState(false);
  const [id,setId] = useState();
  const openModal=(id)=>{
    setId(id);
    setModal(!modal);
  }
  useFetch(modal,id);
  return (
    <>
      <UsersList setId={setId} setVisible={openModal}/>
      <Modal
       visible={modal}
       setVisible={setModal}
       id={id}
      >
        <PostModal/>
      </Modal>
    </>
  )
}

export default Users
