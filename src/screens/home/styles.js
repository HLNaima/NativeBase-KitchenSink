const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
    alignItems: "center"
  },
  logo: {
    width: 190,
    height: 178
  },
  logo2: {
    width: 188,
    height: 164
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  }
};
