import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPostsById } from "../../store/postsSlice";
import { fetchUsers } from "../../store/usersSlice";
export const useFetch = (modal,id )=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers());
        if(modal){
          dispatch(fetchAllPostsById(id));
          }
        },[modal,dispatch,id])
}