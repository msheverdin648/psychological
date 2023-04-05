import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IAppointment, ITimeSlot } from '../models/types'



export const discussionDateApi =  createApi({
    reducerPath: 'discussionDateApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/v1'
        // baseUrl: 'https://api.scr-broker.ru/api/v1'
    }),
    endpoints: (build) => ({
        fetchAvailableDates: build.query<ITimeSlot[], any>({
            query: () => ({
                url: '/days-available'
            })
        }),
        sendAppointment: build.mutation<IAppointment, any>({
            query: (data) => ({
                url: '/appointments/',
                method: 'POST',
                body: data
            })
        })
    })

})