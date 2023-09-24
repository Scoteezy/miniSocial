import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
    persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import userReducer from './usersSlice'
import postReducer from './postsSlice'
import authSlice from './authSlice';
const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['auth']
}
const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    auth: authSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
export const persistor = persistStore(store);