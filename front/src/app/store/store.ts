import ServicesReduser  from '../../enteties/Services/ServicesSlice';
import { combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    ServicesReduser
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware: any) => 
            getDefaultMiddleware()
    })
}  

export type RootState = ReturnType<typeof rootReducer>  
export type AppStore = ReturnType<typeof setupStore>  
export type AppDispatch = AppStore['dispatch']  

