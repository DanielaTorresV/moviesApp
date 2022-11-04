import React, { useRef } from 'react';
import { View, Animated, Button } from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {

  const { opacity, fadeIn, fadeOut } = useFade();

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button 
        title='FADEOUT'
        onPress={ fadeOut }
      />

      <Animated.View 
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white', 
          borderWidth: 10,
          marginBottom: 10,
          marginTop: 10,
          opacity: opacity
        }}
      />

      <Button 
         title='FADEIN'
         onPress={ fadeIn }
      />

    </View>
  )
}

export default FadeScreen;
