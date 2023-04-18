import axios from "axios";
import { csrfToken } from "shared/config/ApiConfig/ApiConfig";


export function sendForm(data: any, url: string){

    axios.defaults.headers.common['X-CSRFToken'] = csrfToken;

    axios.post(url, data)
        // .then(res => console.log(res))
        .catch(err => console.log(err))
}