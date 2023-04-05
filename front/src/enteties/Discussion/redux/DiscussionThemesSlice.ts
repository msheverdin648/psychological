import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { DiscussionThemestate } from '../models/types';


const initiatlState: DiscussionThemestate = {
    cards: [
        {
            id: 1,
            name: 'Поиск себя',
        }, 
        {
            id: 2,
            name: 'Карьерное развитие',
        }, 
        {
            id: 3,
            name: 'Романтические и сексуальные отношения',
        }, 
        {
            id: 4,
            name: 'Трудности в отношениях',
        }, 
        {
            id: 5,
            name: 'Утраты, потеря близкого человека',
        }, 
        {
            id: 6,
            name: 'Депрессия',
        }, 
        {
            id: 7,
            name: 'Хроническая усталость',
        }, 
        {
            id: 8,
            name: 'Чувство тревоги',
        }, 
        {
            id: 9,
            name: 'Проблемы со сном',
        }, 
        {
            id: 10,
            name: 'Пищевое поведение',
        }, 
        {
            id: 11,
            name: 'Профессиональное самоопределение',
        }, 
        {
            id: 12,
            name: 'Проблемы в общениии',
        }, 
        {
            id: 13,
            name: 'Терапия для зумеров',
        }, 
        {
            id: 14,
            name: 'Неуверенность в себе',
        }, 
        {
            id: 15,
            name: 'Депрессия' ,
        }, 
        {
            id: 16,
            name: 'Прокрастинация и выгорание',
        }, 
        {
            id: 17,
            name: 'Аллергия' ,
        }, 
        {
            id: 18,
            name: 'Онкология',
        }, 
        {
            id: 19,
            name: 'Трудности в отношениях',
        }, 
        {
            id: 20,
            name: 'Возрастной кризис',
        }, 
        {
            id: 21,
            name: 'Панические атаки',
        }, 
        {
            id: 22,
            name: 'Сексуальные отношения',
        }, 
        {
            id: 23,
            name: 'Карьера и планы на жизнь',
        }, 
        {
            id: 24,
            name: 'Отсутствие личной жизни',
        }, 
        {
            id: 25,
            name: 'Отношения с родителями',
        }, 
        {
            id: 26,
            name: 'Отношения с детьми',
        }, 
        {
            id: 27,
            name: 'Отношения с мужем',
        }, 
        {
            id: 28,
            name: 'Не могу установить границы',
        }, 
        {
            id: 29,
            name: 'Сложность в принятии решения, не могу сделать выбор',
        }
    
    ]
}


export const DiscussionThemesSlice = createSlice({
    initialState: initiatlState,
    name: 'discussionThemes',
    reducers: {
        
    }
})

const persistConfig = {
    key: 'discussionThemes',
    storage
}



const persistedReducer = persistReducer(persistConfig, DiscussionThemesSlice.reducer)


export default persistedReducer;
