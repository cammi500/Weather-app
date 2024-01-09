import axios from "axios";  

export const api =axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5'
})
export const api_key ="188fdb1b34cacbd6fed414bbf9cab896"