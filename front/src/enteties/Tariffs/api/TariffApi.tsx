import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { baseUrl, csrfToken } from 'shared/config/ApiConfig/ApiConfig'
import { ITariff } from '../models/types';



export const tariffsApi =  createApi({
    reducerPath: 'tariffsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-CSRFToken', csrfToken ? csrfToken : '');
            return headers;
        },
    }),
    endpoints: (build) => ({
        fetchTariffs: build.query<ITariff[], any>({
            query: () => ({
                url: '/tariffs'
            })
        }),
    })

})