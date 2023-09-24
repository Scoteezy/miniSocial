import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const setUserAuth = createAsyncThunk(
    'users/setUserAuth',
    async function ({login,password},{rejectWithValue,dispatch}){
        try{
            const response = await fetch(`http://localhost:8080/api/user/login?login=${login}&password=${password}`)
            if(!response.ok){
            throw new Error('Server Error!');
            }
            const data = await response.json();
            console.log(data)
            if(data.id){
                dispatch(setAuth(data))
            }
        }
        catch(error){
            return rejectWithValue(error.message);
        }
        
    }
)
const initialState = {
    auth: false,
    userInfo:{},
    status: null,
    error:null
}

const setError = (state,action)=>{
    state.status = 'rejected';
    state.error = action.payload
  }
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
        setAuth(state,action){
            state.auth = true;
            state.userInfo = action.payload
        },
        logoutUser(state){
            state.auth= false;
            state.userInfo= {};
        }
	},
    extraReducers: {
        [setUserAuth.pending]:(state)=>{
            state.status = 'loading';
            state.error = null;
        },
        [setUserAuth.rejected]:setError,
        [setUserAuth.rejected]:setError,

    }
	
});
export const {setAuth,logoutUser} = authSlice.actions;
export default authSlice.reducer;