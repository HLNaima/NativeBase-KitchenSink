import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  H3
} from "native-base";
import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");
class HeaderC extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Accueil</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="person" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        <Content>
          <Container>

            <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
              <View style={styles.logoContainer}>
                <ImageBackground source={launchscreenLogo} style={styles.logo} />
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginBottom: 50,
                  backgroundColor: "transparent"
                }}
              >
                <H3 style={styles.text}>App to showcase</H3>
                <View style={{ marginTop: 8 }} />
                <H3 style={styles.text}>NativeBase components</H3>
                <View style={{ marginTop: 8 }} />
              </View>
              <View style={{ marginBottom: 80 }}>
                <Button
                  style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                  onPress={() => this.props.navigation.navigate('Scanned')}
                >
                  <Text>Commencez à Scanner vos produits</Text>
                </Button>
              </View>
            </ImageBackground>
          </Container>
        </Content>
      </Container>
    );
  }
}

export default HeaderC;
