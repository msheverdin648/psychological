import { baseUrl } from "shared/config/ApiConfig/ApiConfig";



export function useGetUrl(path: string, params?: any){

    return {
        path: '/'+path,
        params: params,
        url: `${baseUrl}/${path}/`
    }
}