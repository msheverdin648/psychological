import { VisitService } from 'widgets/ServicesBlock/ui/VisitService/VisitService';
import { OnlineService } from 'widgets/ServicesBlock/ui/OnlineService/OnlineService';
import { FamilyService } from 'widgets/ServicesBlock/ui/FamilyService/FamilyService';
import { ServiceState } from './models/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FC } from 'react';




export const enum ServiceBlockNames {
    ONLINE='online',
    FAMILY='family',
    VISIT='visit'
}

export const  ServiceBlocks: Record<ServiceBlockNames, FC> = {
    [ServiceBlockNames.ONLINE]: OnlineService,
    [ServiceBlockNames.FAMILY]: FamilyService,
    [ServiceBlockNames.VISIT]: VisitService
}


const initialState: ServiceState = {
    services: [
        {
            name: ServiceBlockNames.ONLINE,
            title: 'Онлайн - психоаналитический психотерапевт'

        },
        {
            name: ServiceBlockNames.FAMILY,
            title: 'Семейный психоаналитический психотерапевт'
        },
        {
            name: ServiceBlockNames.VISIT,
            title: 'Визит к Психоаналитическому психотерапевту'
        },
        
    ],
    activeService: {
        name: ServiceBlockNames.FAMILY,
    }
}


export const ServicesSlice = createSlice({
    initialState: initialState,
    name: 'serivce',
    reducers:{
        setBlock(state, action: PayloadAction<string>){
            // state.activeService = state.services.filter(({name})=>{name===action.payload})
            const service = state.services.find(({name})=>name===action.payload)
            if (service){
                state.activeService = service
            }
        }
    }
})  

const servicesPersistConfig = {
    key: 'service',
    storage,
}

const persistedReduser = persistReducer(servicesPersistConfig, ServicesSlice.reducer)

export default persistedReduser;



