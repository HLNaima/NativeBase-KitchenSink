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
import { AppRegistry, View, Image } from 'react-native';
class Gallery extends Component{
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
          <Title>Header</Title>
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
        <Gallery
          style={{ backgroundColor: 'white' }}
          images={[
            { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
            { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
            { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
            { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
          ]}
        />
      </Container >
    );

  }
}
export default Gallery;
