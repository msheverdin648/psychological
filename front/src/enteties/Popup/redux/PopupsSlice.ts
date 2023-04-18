import storage  from 'redux-persist/lib/storage';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import persistReducer from 'redux-persist/es/persistReducer';
import { PopupList, PopupState } from '../models/types';


const initialState: PopupState = {
    popups: [
        {
            name: PopupList.MESSAGE
        },
        {
            name: PopupList.FEEDBACK
        }
    ],
    activePopup:  null
}



export const PopupSlice = createSlice({
    initialState: initialState,
    name: 'popups',
    reducers: {
        openPopup(state, action: PayloadAction<PopupList, string>){
            state.activePopup = action.payload
        },
        closePopup(state){
            state.activePopup = null
        }
    }
})


const persistConfig = {
    key: 'popups',
    storage,
    blacklist: ['popups']
}

const persistedReducer = persistReducer(persistConfig, PopupSlice.reducer)


export default persistedReducer;
