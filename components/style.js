import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26, // Increased font size for emphasis
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3498db", // Changed text color to blue
    textShadowColor: "#000", // Added text shadow for depth
    textShadowOffset: { width: 1, height: 1 }, // Adjusted text shadow offset
    textShadowRadius: 3, // Adjusted text shadow radius
    fontFamily: "Arial", // Changed font family for variety
  },
  button: {
    backgroundColor: "#3498db",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const stylesCamera = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    height: "100%",
  },
  cameraContainer: {
    flex: 1,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  button: {
    flex: 0.1,
    padding: 10,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});

const stylesSignIn = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: {
    width: "80%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1, // Add border
    borderRadius: 10, // Add border radius for rounded corners
    borderColor: "#ccc", // Border color
    backgroundColor: "rgba(173, 216, 230, 0.7)", // Semi-transparent background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "grey",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
  },
  link: {
    color: "blue",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: {
    width: "80%", // Adjust the width as needed
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1, // Add border
    borderRadius: 10, // Add border radius for rounded corners
    borderColor: "#ccc", // Border color
    backgroundColor: "rgba(173, 216, 230, 0.7)", // Semi-transparent background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "grey",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
  },
  link: {
    color: "blue",
  },
  backgroundImage: {
    width: "110%",
    height: "110%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const stylesImageScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#E91E63",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const stylesClassifier = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B6EBFC",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  predictionText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

const stylesMain = StyleSheet.create({
  tabBar: {
    backgroundColor: "#118CB3", // Tab bar background color
    borderBottomWidth: 1, // Tab bar bottom border width
    borderBottomColor: "#ddd", // Tab bar bottom border color
  },
});

const stylesSignOut = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1, // Add border
    borderRadius: 10, // Add border radius for rounded corners
    borderColor: "#ccc", // Border color
    backgroundColor: "#B6EBFC",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3498db",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export {
  stylesHome,
  stylesCamera,
  stylesSignIn,
  stylesSignUp,
  stylesImageScreen,
  stylesClassifier,
  stylesMain,
  stylesSignOut,
};
