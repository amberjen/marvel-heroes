import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeroList from './src/components/HeroList'
import Header from './src/components/commons/Header'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <HeroList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)'
  },
});
