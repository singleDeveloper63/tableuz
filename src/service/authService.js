import axios from 'axios';
const api = 'http://46.36.222.152:8000/api/auth';

export const Auth = {
    login : (data) => {
        return axios.post(`${api}/login/`,data)
    }
}