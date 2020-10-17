import axios from 'axios';
const api = 'http://46.36.222.152:8000/api/excel/city/';

export const DataService = {
    getAll : () => {
        return axios.get(`${api}list`)
    }
}

