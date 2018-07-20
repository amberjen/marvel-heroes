import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import HeroList from './src/components/HeroList'
import Header from './src/components/commons/Header'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        stickyHeaderIndices={[0]}>
        <Header />
        <HeroList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
