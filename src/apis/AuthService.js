import requests from "./HttpServices"

export const Login = async (data) => {
    return await requests.post(`auth/login`, data);
};

export const Register = async (data) => {
    return await requests.post(`auth/register`, data);
};