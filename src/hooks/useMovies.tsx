import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [moviesActual, setMoviesActual] = useState<Movie[]>([]);

  const getMovies = async () => {
    const res = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const movies = res.data.results;

    setMoviesActual(movies);

    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [])

  return {
    moviesActual,
    isLoading
  }
}

export default useMovies;
