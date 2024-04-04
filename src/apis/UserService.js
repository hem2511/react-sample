import requests from "./HttpServices";

export const CreateUser = async (data) => {
    return await requests.post(`user`, data);
};

export const GetAllUser = async () => {
    return await requests.get(`user`);
};

export const GetUser = async (id) => {
    return await requests.get(`user/${id}`);
};

export const UpdateUser = async (id,data) => {
    return await requests.put(`user/${id}`, data);
};

export const DeleteUser = async (id) => {
    return await requests.delete(`auth/${id}`);
};