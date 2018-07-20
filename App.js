import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeroList from './src/components/HeroList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeroList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
