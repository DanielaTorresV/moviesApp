import React from 'react';

import { ActivityIndicator, View, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import GradientBG from '../components/GradientBG';
import HorizontalSlider from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import { styles } from '../theme/appTheme';
import getImageColors from '../helpers/getImageColors';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  const getPosterColors = async( index: number ) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    const [ primary, secondary ] = await getImageColors( uri );
    console.log({primary, secondary});
  }

  if ( isLoading ) {
    return(
      <View style={ styles.containerLoading } >
        <ActivityIndicator color={ 'blue' } size={ 50 } />
      </View>
    )
  } 

  return (
    <GradientBG>
      <ScrollView>
        <View style={{ marginTop: top + 20 }} >

          {/* Carousel Principal */}
          <View style={ styles.containerCarousel } >
            <Carousel 
              data={ nowPlaying }
              renderItem= { ({ item }: any) => <MoviePoster movie={ item } />}
              sliderWidth= { windowWidth }
              itemWidth= { 300 }
              inactiveSlideOpacity={ 0.9 }
              onSnapToItem={ ( index ) => getPosterColors( index )}
            />
          </View>

          {/* Peliculas Populares  */}
          <HorizontalSlider title='Las + Populares' movies={ popular } />
          {/* Peliculas Las mejor calificadas  */}
          <HorizontalSlider title='Las mejor Calificadas' movies={ topRated } />
          {/* Peliculas Proximas  */}
          <HorizontalSlider title='Próximos Lanzamientos' movies={ upcoming } />
        
        </View>
      </ScrollView>  
    </GradientBG>
      
  )
}

export default HomeScreen;
