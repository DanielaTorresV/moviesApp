import ImageColors from 'react-native-image-colors';

const getImageColors = async( uri: string ) => {
  
  const colors = await ImageColors.getColors( uri, {});

  let primary;
  let secondary;
  
  switch  (colors.platform) {
    case 'android':
      // android result properties
      primary = colors.vibrant;
      secondary = colors.darkVibrant;
      break
    case 'ios':
      // iOS result properties
      primary = colors.primary;
      secondary = colors.secondary;
      break
    default:
      throw new Error('Unexpected platform key')
  }

  return [ primary, secondary ]
}

export default getImageColors;
