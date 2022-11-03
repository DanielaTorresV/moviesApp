import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  globalMargin: {
    margin: 10,
  },
  maintitle: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 25,
    fontWeight: 'bold'
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  containerMoviePosterImage: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  moviePosterImage: {
    flex: 1,
    borderRadius: 18,    
  },
  containerCarousel: {
    height: 440,
  }
});