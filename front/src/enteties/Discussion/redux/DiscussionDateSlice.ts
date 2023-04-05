import { createSlice } from '@reduxjs/toolkit'
import { DiscussionDateState } from '../models/types'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const initiatlState: DiscussionDateState = {
    cards: [
        {
            id: 1,
            date: '24 фев, чт',
            time: '09:00'
        },
        {
            id: 2,
            date: '24 фев, чт',
            time: '10:00'
        },
        {
            id: 3,
            date: '24 фев, чт',
            time: '11:00'
        },
        {
            id: 4,
            date: '24 фев, чт',
            time: '12:00'
        },
        {
            id: 5,
            date: '24 фев, чт',
            time: '13:00'
        },
        {
            id: 6,
            date: '24 фев, чт',
            time: '14:00'
        },
        {
            id: 7,
            date: '24 фев, чт',
            time: '15:00'
        },
    ]
}


export const DiscussionDateSlice = createSlice({
    initialState: initiatlState,
    name: 'discussionDate',
    reducers: {
        
    }
})

const persistConfig = {
    key: 'discussionDate',
    storage
}



const persistedReducer = persistReducer(persistConfig, DiscussionDateSlice.reducer)

export default persistedReducer;
