import ServicesReduser  from 'enteties/Services/ServicesSlice';
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
import { DiscussionReducer, DiscussionThemesReducer, DiscussionDateReducer, discussionDateApi, discussionThemesApi} from 'enteties/Discussion'

const rootReducer = combineReducers({
    ServicesReduser,
    DiscussionReducer,
    DiscussionThemesReducer,
    DiscussionDateReducer,
    [discussionDateApi.reducerPath]: discussionDateApi.reducer,
    [discussionThemesApi.reducerPath]: discussionThemesApi.reducer
})



const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware: any) => 
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            })
                .concat(discussionDateApi.middleware)
                .concat(discussionThemesApi.middleware)
    })
}  

export const store = setupStore()


export type RootState = ReturnType<typeof rootReducer>  
export type AppStore = ReturnType<typeof setupStore>  
export type AppDispatch = AppStore['dispatch']  
export const persistor = persistStore(store)

