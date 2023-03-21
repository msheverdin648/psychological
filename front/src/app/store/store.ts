import ServicesReduser  from '../../enteties/Services/ServicesSlice';
import { combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    services: ServicesReduser
})



const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware: any) => 
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            })
    })
}  


export type RootState = ReturnType<typeof rootReducer>  
export type AppStore = ReturnType<typeof setupStore>  
export type AppDispatch = AppStore['dispatch']  
export const persistor = persistStore(setupStore())

