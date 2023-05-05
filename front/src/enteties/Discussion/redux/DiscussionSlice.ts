import { IDiscussionThemes, IDiscussionDateCard, FeedbackFormState, IAppointment } from '../models/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { DiscussionState } from '../models/types';


const initialState: DiscussionState = {
    discussion_theme: null,
    client: {
        email: '',
        experience: false,
        name: '',
        phone: '',
    },
    time_slot: null,
    curPage: 1,
    totalPages: 0,
    fixedPagesCount: 3,  
}




export const DiscussionSlice = createSlice({
    initialState: initialState,
    name: 'discussion',
    reducers: {
        setDiscussionTheme(state, action: PayloadAction<IDiscussionThemes, string>){
            state.discussion_theme = action.payload
            // if(state.discussion_themes.find((card)=>card.name===action.payload.name)){
            //     state.discussion_themes = state.discussion_themes.filter((card)=>card.name!==action.payload.name)
            // }else {
            //     state.discussion_themes.push(action.payload)
            // }
        },
        setPagesCount(state, action: PayloadAction<number, string> ){
            state.totalPages = Math.ceil(action.payload / 10) + state.fixedPagesCount
        },
        increaseCurPage(state){
            state.curPage = state.curPage + 1
        },
        decreaseCurPage(state){
            state.curPage = state.curPage - 1
        },
        setExperience(state, action: PayloadAction<boolean, string >){
            state.client.experience = action.payload
        },
        setTimeSlot(state, action: PayloadAction<IDiscussionDateCard, string>){
            state.time_slot = action.payload 
        },
        setDataFromForm(state, action: PayloadAction<FeedbackFormState, string>){
            state.client.name = action.payload.name
            state.client.email = action.payload.email
            state.client.phone = action.payload.phone
        },
        resetState(state){
            state.time_slot = null
            state.discussion_theme = null
            state.curPage = 1
        }



    }
})


const persistConfig = {
    key: 'discussion',
    storage
}

const persistedReducer = persistReducer(persistConfig, DiscussionSlice.reducer)


export default persistedReducer;
