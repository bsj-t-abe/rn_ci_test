// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('rn053', () => App);

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './src/screens/index';
import configureStore from './src/configureStore';

const store = configureStore();

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'rn053.StartUp.Welcome',
    title: 'Welcome',
    navigatorStyle: {},
    navigatorButtons: {}
  },
});
