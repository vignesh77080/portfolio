import axios from 'axios';

let instance = axios.create({
    baseURL : 'https://portfoliocontactform-a52e4.firebaseio.com/'
});

export default instance;