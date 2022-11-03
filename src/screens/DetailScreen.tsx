import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const DetailScreen = ( { route }: Props ) => {

  const movie = route.params;

  return (
    <View>
      <Text>Detalles</Text>
    </View>
  )
}

export default DetailScreen;
