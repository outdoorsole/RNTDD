import React, { Component } from 'react';
import {
  View,
  TextInput,
} from 'react-native';

export default class AddRestaurantModal extends Component {
  render() {
    const { visible } = this.props;

    if (!visible) {
      return null;
    }
    
    return (
      <View>
        <TextInput
          testID="restaurantNameTextField"
        />
      </View>
    );
  }
};