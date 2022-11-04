import React, { createContext } from 'react'
import { useState } from 'react';

interface ImageColors {
  primary: string,
  secondary: string,
}

interface ContextProps {
  colors: ImageColors,
  previusColors: ImageColors,
  setMainColors: (colors: ImageColors) => void,
  setPreviusMainColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

  const [colors, setColors] = useState<ImageColors>({ 
    primary: 'transparent',
    secondary: 'transparent'
  });

  const [previusColors, setPreviusColors] = useState<ImageColors>({ 
    primary: 'transparent',
    secondary: 'transparent'
  });

  const setMainColors = ( colors: ImageColors ) => {
    setColors( colors );
  }

  const setPreviusMainColors = ( colors: ImageColors ) => {
    setPreviusColors( colors );
  }

  return(
    <GradientContext.Provider
       value={{
        colors,
        previusColors,
        setMainColors,
        setPreviusMainColors,
       }}
    >
      { children }
    </GradientContext.Provider>
  )
}