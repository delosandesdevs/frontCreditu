import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../redux/reducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';


const persistConfig = {
    key: 'counter', 
    storage,
};
const reducers = reducer 
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
    reducer: persistedReducer,
    middlewware: getDefaultMiddleware =>
    getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})
