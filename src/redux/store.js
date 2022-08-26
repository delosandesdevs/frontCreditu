import {configureStore} from '@reduxjs/toolkit'
import {reducer} from '../redux/reducer'
// import storage from 'redux-persist/lib/storage';
// import {persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
// const persistConfig = {key: 'counter', storage,};
// const persistedReducer = persistReducer(persistConfig, reducers);
//const reducers = reducer
const store = configureStore({reducer : reducer})

export default store