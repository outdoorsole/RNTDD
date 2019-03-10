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

  showAddRestaurantModal = () => {
    this.setState({ isAddModalVisible: true });
  }

  render() {
    const { isAddModalVisible } = this.state;

    return (
      <View>
        <Button
          title="New Restaurant"
          testID="newRestaurantButton"
          onPress={this.showAddRestaurantModal}
        />
        <AddRestaurantModal
          visible={isAddModalVisible}
        />
      </View>
    )
  }
}