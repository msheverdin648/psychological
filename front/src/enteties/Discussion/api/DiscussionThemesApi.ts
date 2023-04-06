import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IDiscussionThemes } from '../models/types'
import { baseUrl } from 'shared/config/ApiConfig/ApiConfig'



export const discussionThemesApi =  createApi({
    reducerPath: 'discussionThemesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl

    }),
    endpoints: (build) => ({
        fetchAvailableThemes: build.query<IDiscussionThemes[], any>({
            query: () => ({
                url: '/discussion-themes'
            })
        })
    })

})