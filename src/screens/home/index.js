import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Image } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import HeaderC from "../camille/header"

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-camille.png");
const lafayetteLogo = require("../../../assets/Galeries_Lafayette_logo.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground  style={styles.imageContainer}>
        <View style={styles.logoContainer}>
          <ImageBackground source={launchscreenLogo} style={styles.logo} />
          <Text>BIENVENUE</Text>
          <ImageBackground source={lafayetteLogo} style={styles.logo2} />
        </View>
          <View style={{marginBottom: 50}} >
            <Button
              style={{ backgroundColor: "#00cc6d", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate('Scanned')}
            >
              <Text>COMMENCER</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
