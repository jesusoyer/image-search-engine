import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID NFcAb6cz5rqU75kY1GFvyLIqll1vfMYkXbkutjwFx4g'
    }
});