import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { SimpleLineIcons } from '@expo/vector-icons'

import Header from '../components/commons/Header'

class Profile extends Component {
    
  render() {
    const { navigation } = this.props
    const { containerStyles, headerInnerStyles, btnStyles, btnWrapperStyles } = styles

    // Get the param, provide a fallback value if not available
    const heroId = navigation.getParam('heroId', 'No ID')

    return (
      <View style={containerStyles}>
        <Header>
          <View style={headerInnerStyles}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')}
              style={btnWrapperStyles}>
              <SimpleLineIcons name="arrow-left" size={16} color="#fff" />
              <Text style={btnStyles}>Back</Text>
            </TouchableOpacity>
          </View>
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
  btnWrapperStyles: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnStyles: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 4
  },
  headerInnerStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  }
})

export default withNavigation(Profile)