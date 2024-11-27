import axios from 'axios';
import { UserRegister } from '../models/UserRegister';
import { UserLogin } from '../models/UserLogin';
import { UserUpdate } from '../models/UserUpdate';

export const registerUser = async (userRegister: UserRegister) => {
    const { data } = await axios.post('/api/v1/users/register', userRegister);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
}

export const loginUser = async (userLogin: UserLogin) => {
    const { data } = await axios.post('/api/v1/users/login', userLogin);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
}

export const getUser = () => {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
}

export const updateUser = async (user: UserUpdate) => {
    const { data } = await axios.put('/api/v1/users/update', user);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
}

export const logout = () => {
    localStorage.removeItem('user');
}