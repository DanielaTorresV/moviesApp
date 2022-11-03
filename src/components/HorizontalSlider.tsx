import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/appTheme';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string,
  movies: Movie[],
}

const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{
      height: (title) ? 260 : 220
    }} >

          {
            title && <Text style={ styles.maintitle } >{ title }</Text>
          }
          
          <FlatList 
            data={ movies }
            keyExtractor= { ( item ) => item.id.toString() }
            renderItem= { ({ item }: any) => (
              <MoviePoster movie={ item } width={ 140 } height={ 200 }/>
            )}
            horizontal= { true }
            showsHorizontalScrollIndicator= { false }
          />
        </View>
  )
}

export default HorizontalSlider;
