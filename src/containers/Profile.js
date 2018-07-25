import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

import Header from '../components/commons/Header'

class Profile extends Component {
    
  render() {
    const { navigation } = this.props
    const { containerStyles, titleStyles } = styles

    // Get the param, provide a fallback value if not available
    const heroId = navigation.getParam('heroId', 'No ID')

    return (
      <View style={containerStyles}>
        <Header>
          <Button title="Back" onPress={() => navigation.navigate('Home')} />
          <Text style={titleStyles}>Profile</Text>
        </Header>
        <Text>Hero: {JSON.stringify(heroId)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)'
  },
  titleStyles: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600'
  }
})

export default withNavigation(Profile)