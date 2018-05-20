import React, { Component } from "react";
import Gallery from 'react-native-image-gallery';
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  Fab,
  Center,
  Content
} from "native-base";
import { AppRegistry, View, Image, ScrollView } from 'react-native';

import styles from "./styles";
const photo = require("../../../assets/rsz_logo-camille-icon.png");

class Scanned extends Component{
  render() {
    return (
      <Container >
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Scan</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="person" />
          </Button>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
      <Content>
        <ScrollView style={{paddingVertical: 20, paddingHorizontal: 20}} horizontal={true}>
          <Card style={styles.mb}>
            <CardItem>
              <Left>

                <Body>
                  <Text>Chemise</Text>
                  <Text note>Travail</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: 250,
                  height: 250,
                  flex: 1
                }}
                source={photo}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Text> Descriptif du produit </Text>
            </CardItem>
          </Card>

          <Card style={styles.mb}>
            <CardItem>
              <Left>

                <Body>
                  <Text>Chemise Vacances</Text>
                  <Text note>Vacances</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: 250,
                  height: 250,
                  flex: 1
                }}
                source={photo}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Text>Descriptif du produit </Text>
            </CardItem>
          </Card>

          <Card style={styles.mb}>
            <CardItem>
              <Left>

                <Body>
                  <Text>T-shirt</Text>
                  <Text> </Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: 250,
                  height: 250,
                  flex: 1
                }}
                source={photo}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Text> Description du produit </Text>
            </CardItem>
          </Card>

          <Left/>

        </ScrollView>
        <View>
            <Button rounded danger style={{ alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate('Suggestions')} >
              <Text>Fin</Text>
            </Button>
        </View>
        </Content>
      </Container >
    );

  }
}
export default Scanned;
