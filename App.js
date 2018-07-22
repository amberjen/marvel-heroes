import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './src/reducers'
import Home from './src/containers/Home'
// import HeroList from './src/components/HeroList'
// import Header from './src/components/commons/Header'

class App extends React.Component {

  render() {
    const store = createStore(rootReducer, applyMiddleware(thunk))

    return (
      <Provider store={store}>
        <View style={styles.container}>
         <Home />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)'
  }
});

export default App
