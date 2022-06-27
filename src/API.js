import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://helper-73beb-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default instance;