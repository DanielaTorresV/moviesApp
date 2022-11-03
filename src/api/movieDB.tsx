import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e395668839de5583246ef9e6fae9a700',
    language: 'es-ES'
  }
});

export default movieDB;