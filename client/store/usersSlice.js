import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function (_,{rejectWithValue}){
        try{
            const response = await fetch('http://localhost:8080/api/user');
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
export const addNewUser = createAsyncThunk(
    'users/addNewUser',
    async function({login,password},{rejectWithValue,dispatch}){
        try{
            const newUser ={
                login:login,
                password: password
            }
            const response = await fetch('http://localhost:8080/api/user',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            if (!response.ok){
                throw new Error('Cannot add task. Server Error!');
              }
           
              const data = await response.json();
              if(data.login.length>0){
                dispatch(addUser(data))
              }
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    } 
)

export const delUser = createAsyncThunk(
    'users/delUser',
    async function(id,{rejectWithValue,dispatch}){
        try {
            const response = await fetch(`http://localhost:8080/api/user/${id}`,{
                method: 'DELETE',
            })
            if (!response.ok){
                throw new Error('Cannot delete task. Server Error!');
              }
              dispatch(removeUser(id))
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state,action)=>{
    state.status = 'rejected';
    state.error = action.payload
  }

const userSlice = createSlice({
	name: 'users', // название слайса
	initialState: { 
        users: [],
        status: null,
        error:null
},
	reducers: {
        addUser(state,action){
            state.users.push(action.payload);
        },
        removeUser(state,action){
           state.users= state.users.filter((user)=>user.id!==action.payload)
        }
	},
    extraReducers: {
        [fetchUsers.pending]:(state)=>{
            state.status = 'loading';
            state.error = null;
        },
        [fetchUsers.fulfilled]:(state,action)=>{
            state.status = 'resolver';
            state.users = action.payload;
        },
        [fetchUsers.rejected]:setError,
        [delUser.rejected]:setError,

    }
	
});

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;