import { IDisscussionCard } from './../models/types';
import { IDescriptionCard } from 'enteties/DescriptionCard';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { DisscussionState } from '../models/types';


const initialState: DisscussionState = {
    cards: [
        {text: 'Поиск себя'}
    ],
    email: '',
    experience: false,
    name: '',
    phone: '',
    time: '',
}




export const DiscussionSlice = createSlice({
    initialState: initialState,
    name: 'discussion',
    reducers: {
        toggleCard(state, action: PayloadAction<IDisscussionCard, string>){
            if(state.cards.find((card)=>card.text===action.payload.text)){
                state.cards = state.cards.filter((card)=>card.text!==action.payload.text)
            }else {
                state.cards.push({text: action.payload.text})
            }
        }
    }
})


const persistConfig = {
    key: 'discussion',
    storage
}

const persistedReducer = persistReducer(persistConfig, DiscussionSlice.reducer)


export default persistedReducer;
