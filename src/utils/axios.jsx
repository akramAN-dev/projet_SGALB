import axios from "axios";

const url = "http://localhost:8080"
const customFetch = axios.create({
    baseURL:url,
})

export default customFetch