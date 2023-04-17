import axios from "axios";


export function sendForm(data: any, url: string){

    
    axios.post(url, data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}