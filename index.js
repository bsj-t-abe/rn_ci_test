// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('rn053', () => App);

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens/index';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'rn053.StartUp.Welcome',
    title: 'Welcome',
    navigatorStyle: {},
    navigatorButtons: {}
  },
});
