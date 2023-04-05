import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IDiscussionThemes } from '../models/types'



export const discussionThemesApi =  createApi({
    reducerPath: 'discussionThemesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/v1'
        // baseUrl: 'https://api.scr-broker.ru/api/v1'
    }),
    endpoints: (build) => ({
        fetchAvailableThemes: build.query<IDiscussionThemes[], any>({
            query: () => ({
                url: '/discussion-themes'
            })
        })
    })

})