import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';

export default class RestaurantList extends Component {
  render() {
    return (
      <View>
        <Button
          testID="newRestaurantButton"
          title="New Restaurant"
        />
      </View>
    )
  }
}