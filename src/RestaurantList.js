import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';
import AddRestaurantModal from './AddRestaurantModal';

export default class RestaurantList extends Component {
  state = {
    isAddModalVisible: false,
  }

  render() {
    const { isAddModalVisible } = this.state;

    return (
      <View>
        <Button
          title="New Restaurant"
          testID="newRestaurantButton"        
        />
        <AddRestaurantModal
          visible={isAddModalVisible}
        />
      </View>
    )
  }
}