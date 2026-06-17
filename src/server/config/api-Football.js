import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiFootball = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'x-rapidapi-key': process.env.API_KEY,
  }

});

export default apiFootball;