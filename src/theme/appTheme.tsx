import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  globalMargin: {
    margin: 10,
  },
  maintitle: {
    fontSize: 25,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  containerMainMoviePosterImage: {
    width: 300,
    height: 420,
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
    elevation: 10,
  },
  moviePosterImage: {
    flex: 1,
    borderRadius: 18,    
  }
});