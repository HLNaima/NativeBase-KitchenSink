import React, { Component } from "react";
import { Image, View } from "react-native";
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
  Body
} from "native-base";
import styles from "./styles";

const cardOne = require("../../../assets/rsz_logo-camille-icon.png");
const cards = [
  {
    text: "Tenue 1",
    name: "One",
    image: cardOne
  },
  {
    text: "Tenue 2",
    name: "Two",
    image: cardOne
  },
  {
    text: "Tenue 3",
    name: "Three",
    image: cardOne
  },
  {
    text: "Tenue 4",
    name: "Four",
    image: cardOne
  }
];

class Suggestions extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Suggestions</Title>
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

        <View style={{ flex: 1 }}>
          <DeckSwiper
            ref={mr => (this._deckSwiper = mr)}
            dataSource={cards}
            looping={false}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>

                    <Body>
                      <Text >
                        {item.text}
                      </Text>

                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      flex: 1,
                      height: 300
                    }}
                    source={item.image}
                  />
                </CardItem>
              </Card>}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            padding: 15
          }}
        >
        <Button rounded danger onPress={() => this._deckSwiper._root.swipeLeft()}>
          <Text>Non</Text>
        </Button>
        <Button rounded success onPress={() => this._deckSwiper._root.swipeRight()}>
          <Text>Yes</Text>
        </Button>
        </View>

      </Container>
    );
  }
}

export default Suggestions;
