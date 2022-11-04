import React from 'react';

import { ActivityIndicator, Text, View, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import GradientBG from '../components/GradientBG';

import HorizontalSlider from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import { styles } from '../theme/appTheme';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

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
