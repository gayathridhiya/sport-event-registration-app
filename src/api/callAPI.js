import axios from 'axios';

const API_URL = 'https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a';


export default function callAPI(endpoint, method = 'GET', body) {
    return axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}