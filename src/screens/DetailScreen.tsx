import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const DetailScreen = ( { route }: Props ) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie.id);

  return (
    <ScrollView>
      <View style={ styles.containerMovieDetailImage } >
        <Image 
          source={{ uri }}
          style={ styles.movieDetailImage }
        />
      </View>

      <View style={ styles.marginContainer} >
        <Text style={ styles.subTitle } >{ movie.original_title }</Text>
        <Text style={ styles.title } >{ movie.title }</Text>        
      </View>

      <View style={ styles.marginContainer} >
      <Icon name="star-outline" size={20} color='gray' />
      </View>
      
    </ScrollView>
  )
}

export default DetailScreen;


const styles = StyleSheet.create({
  containerMovieDetailImage: {
    width: '100%',
    height: screenHeight * 0.7,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  movieDetailImage: {
    flex: 1, 
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 18,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});