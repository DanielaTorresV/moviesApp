import React from 'react';
import { Image, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/appTheme';

interface Props {
  movie: Movie;
  height?: number,
  width?: number,
}

const MoviePoster = ({ movie, height= 420, width= 300 } : Props) => {

const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <View style={{
      height,
      width,
      marginHorizontal: 8
    }} >
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
