import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class TodoList extends Component<{}> {
  render() {
    return (
      <View>
        <Text>TodoList</Text>
        <Button
          onPress={() => this.props.navigator.pop()}
          title="Return Welcome"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
