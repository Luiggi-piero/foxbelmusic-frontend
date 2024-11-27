import axios from 'axios';

// En cada peticion se agregará el token al header

axios.interceptors.request.use(
    req => {
        const userJson = localStorage.getItem('user');
        const token = userJson && JSON.parse(userJson)?.token;

        if (token) {
            req.headers['access__token'] = token;
        }
        return req;
    },
    error => {
        return Promise.reject(error)
    }
)