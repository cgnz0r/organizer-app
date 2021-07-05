import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.weatherbit.io/v2.0',
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        'key': process.env.VUE_APP_WB_API_KEY,
        'city': "Tomsk"
    }
});

export default instance