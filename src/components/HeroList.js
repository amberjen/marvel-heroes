import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class HeroList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hero List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default HeroList