import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IAppointment, ITimeSlot } from '../models/types'
import { baseUrl } from 'shared/config/ApiConfig/ApiConfig'



export const discussionDateApi =  createApi({
    reducerPath: 'discussionDateApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
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