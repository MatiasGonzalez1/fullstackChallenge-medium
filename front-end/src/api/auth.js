import axios from "./axios.js"


export const registerRequest = user => axios.post(`/signin`, user)

export const loginRequest = user => axios.post(`/login`, user)