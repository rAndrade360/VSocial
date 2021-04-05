import axios from 'axios';

const apiIntegration = axios.create({
  baseURL: 'http://localhost:3333',
});

export default apiIntegration;