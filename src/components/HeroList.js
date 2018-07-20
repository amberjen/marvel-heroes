import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import Header from './commons/Header'

class HeroList extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        stickyHeaderIndices={[0]}>
        <Header />
        <Text>Hero List</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1
  }
})

export default HeroList