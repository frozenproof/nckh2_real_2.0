import axios from "axios"

//create a new instance of axios, from url api because there is folder api inside pages folder
const instance = axios.create({
    baseURL:'/api/',
    withCredentials: true,
});