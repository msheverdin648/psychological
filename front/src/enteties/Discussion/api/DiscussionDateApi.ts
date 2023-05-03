import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IAppointment, IDay, ITimeSlot } from '../models/types'
import { baseUrl, csrfToken } from 'shared/config/ApiConfig/ApiConfig'



export const    discussionDateApi =  createApi({
    reducerPath: 'discussionDateApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-CSRFToken', csrfToken ? csrfToken : '');
            return headers;
        },
    }),
    endpoints: (build) => ({
        fetchAvailableDates: build.query<ITimeSlot[], any>({
            query: () => ({
                url: '/days-available'
            })
        }),
        fetchDays: build.query<IDay[], any>({
            query: () => ({
                url: '/days'
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