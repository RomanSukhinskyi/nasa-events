import axios from 'axios';

export default axios.create({
    baseURL: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events',
    responseType: 'json'
}) 
    // baseURL: 'https://cors-anywhere.herokuapp.com/https://eonet.sci.gsfc.nasa.gov/api/v3/events',
