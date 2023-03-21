import { VisitService } from './../../widgets/ServicesBlock/ui/VisitService/VisitService';
import { OnlineService } from 'widgets/ServicesBlock/ui/OnlineService/OnlineService';
import { FamilyService } from 'widgets/ServicesBlock/ui/FamilyService/FamilyService';
import { ServiceState, IService } from './models/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export const enum ServiceBlockNames {
    ONLINE='online',
    FAMILY='family',
    VISIT='visit'
}


const initialState: ServiceState = {
    services: [
        {
            name: ServiceBlockNames.ONLINE,
            block: OnlineService,
            title: 'Онлайн - психоаналитический психотерапевт'

        },
        {
            name: ServiceBlockNames.FAMILY,
            block: FamilyService,
            title: 'Семейный психоаналитический психотерапевт'
        },
        {
            name: ServiceBlockNames.VISIT,
            block: VisitService,
            title: 'Визит к Психоаналитическому психотерапевту'
        },
        
    ],
    activeService: {
        name: ServiceBlockNames.FAMILY,
        block: FamilyService,
        title: 'Семейный психоаналитический психотерапевт'
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

export default ServicesSlice.reducer;



