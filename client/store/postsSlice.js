import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const fetchAllPostsById = createAsyncThunk(
    'users/fetchPosts',
    async function (id,{rejectWithValue}){
        try{
            const response = await fetch(`http://localhost:8080/api/post?id=${id}`);
            if(!response.ok){
            throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        }
        catch(error){
            return rejectWithValue(error.message);
        }
        
    }
)
export const delPost = createAsyncThunk(
    'users/delUser',
    async function(id,{rejectWithValue,dispatch}){
        try {
            const response = await fetch(`http://localhost:8080/api/post/${id}`,{
                method: 'DELETE',
            })
            if (!response.ok){
                throw new Error('Cannot delete task. Server Error!');
              }
              dispatch(removePost(id))
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)
export const addNewPost = createAsyncThunk(
    'users/addNewPost',
    async function({title,text,id},{rejectWithValue,dispatch}){
        try{
            const newPost ={
                title,
                content:text,
                userId: id
            }
            console.log(newPost)
            const response = await fetch('http://localhost:8080/api/post',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPost)
            })
            if (!response.ok){
                throw new Error('Cannot add task. Server Error!');
              }
           
              const data = await response.json();
                dispatch(addPost(data))
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    } 
)

const setError = (state,action)=>{
    state.status = 'rejected';
    state.error = action.payload
  }

const postsSlice = createSlice({
	name: 'posts', // название слайса
	initialState: { 
        posts: [],
        status: null,
        error:null
},
	reducers: {
        addPost(state,action){
            state.posts.push(action.payload);
        },
        removePost(state,action){
            state.posts= state.posts.filter((post)=>post.id!==action.payload)
         }
	},
    extraReducers: {
        [fetchAllPostsById.pending]:(state)=>{
            state.status = 'loading';
            state.error = null;
        },
        [fetchAllPostsById.fulfilled]:(state,action)=>{
            state.status = 'resolved';
            state.posts = action.payload;
        },
        [fetchAllPostsById.rejected]:setError,
        [delPost.rejected]:setError,
        [addNewPost.rejected]:setError
    }
	
});
export const {addPost,removePost} = postsSlice.actions;
export default postsSlice.reducer;