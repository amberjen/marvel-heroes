import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createStackNavigator } from 'react-navigation'
import rootReducer from './src/reducers'
import HomeScreen from './src/containers/Home'
import ProfileScreen from './src/containers/Profile'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  },
  {
    headerMode: 'none'
  }
)
class App extends React.Component {

  render() {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    const { containerStyles } = styles

    return (
      <Provider store={store}>
        <View style={containerStyles}>
          <StatusBar barStyle="light-content" />
         <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1
  }
});

export default App
