import { Navigation } from 'react-native-navigation';
import Welcome from './StartUp/Welcome';
import TodoList from './StartUp/TodoList';

export function registerScreens(store, Provider) {
  // StartUp Screens
  Navigation.registerComponent('rn053.StartUp.Welcome', () => Welcome, store, Provider);
  Navigation.registerComponent('rn053.StartUp.TodoList', () => TodoList, store, Provider);
}
