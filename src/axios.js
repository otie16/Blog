//for microservices
import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'http://dfa6f3289bfc.ngrok.io/api/'
})