import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';
import { RootStackParams } from '../navigation/StackNavigator';

interface Props {
  movie: Movie;
  height?: number,
  width?: number,
}

const MoviePoster = ({ movie, height= 420, width= 300 } : Props) => {

const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={ 0.8 }
      style={{
        height,
        width,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,

      }}
      onPress={() => navigation.navigate('DetailScreen', movie )}
    >
      <View style={ styles.containerMoviePosterImage } >
        <Image 
          source={{ uri }}
          style={ styles.moviePosterImage }
        />
      </View>
      
    </TouchableOpacity>
  )
}

export default MoviePoster;
