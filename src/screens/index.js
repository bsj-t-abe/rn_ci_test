import { Navigation } from 'react-native-navigation';
import Welcome from './StartUp/Welcome';

export function registerScreens() {
  Navigation.registerComponent('rn053.StartUp.Welcome', () => Welcome);
}
