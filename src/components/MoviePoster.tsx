import React from 'react';
import { Image, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/appTheme';

interface Props {
  movie: Movie;
}

const MoviePoster = ({ movie } : Props) => {

const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <View style={ styles.containerMainMoviePosterImage } >
      <View style={ styles.containerMoviePosterImage } >
        <Image 
          source={{ uri }}
          style={ styles.moviePosterImage }
        />
      </View>
      
    </View>
  )
}

export default MoviePoster;
