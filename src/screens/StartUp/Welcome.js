import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {
  addTodo,
} from '../../actions';

export default class Welcome extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
    };
  }

  _onPressAddTodo() {
    console.log(this.props);
    // const {store} = this.props;
    // this.props.dispatch(addTodo(this.state.todoText));
  }

  render() {
    return (
      <View>
        <Text>Welcome</Text>
        <Text>Please input TODO</Text>
        <TextInput
          onChangeText={(value) => this.setState({todoText: value})}
          value={this.state.todoText}
        />

        <Button
          onPress={() => this._onPressAddTodo()}
          title="Add TODO"
          color="#841584"
        />

        <Button
          onPress={() => this.props.navigator.push({screen: 'rn053.StartUp.TodoList'})}
          title="Next"
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
