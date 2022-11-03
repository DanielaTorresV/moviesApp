import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import { styles } from '../theme/appTheme';

const HomeScreen = () => {

  const { moviesActual, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if ( isLoading ) {
    return(
      <View style={ styles.containerLoading } >
        <ActivityIndicator color={ 'blue' } size={ 50 } />
      </View>
    )
  } 

  return (
    <View style={{ marginTop: top + 20 }} >
      <Text style={ styles.maintitle } >Home</Text>
      <MoviePoster 
        movie={ moviesActual[0] }
      />
    </View>
  )
}

export default HomeScreen;
