import axios from "axios";

const baseURL = `${import.meta.env.VITE_BASE_URL}/api/v1`;

// Create a new axios instance with a custom configuration
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin" : "*"
    },
});

// Set up request interceptor to add Authorization header
instance.interceptors.request.use(
    (config) => {
        // Retrieve Authorization token from sessionStorage
        const Authorization = sessionStorage.getItem('Authorization');
        // Add Authorization header if token exists
        if(Authorization){
            config.headers.Authorization = `Bearer ${Authorization}`
        }        
        return config;
    }    
)

export default instance;