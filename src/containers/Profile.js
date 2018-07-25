import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { SimpleLineIcons } from '@expo/vector-icons'

import Header from '../components/commons/Header'

class Profile extends Component {
    
  render() {
    const { navigation } = this.props
    const { 
      containerStyles, 
      headerInnerStyles, 
      btnStyles, 
      btnWrapperStyles, 
      textStyles,
      detailWrapperStyles } = styles

    // Get the param, provide a fallback value if not available
    const heroId = navigation.getParam('heroId', 'No ID')
    const name = navigation.getParam('name', 'No name')
    const description = navigation.getParam('description', 'No description')
    
    // TODO: add background image
    const thumbnail = navigation.getParam('thumbnail', 'No thumbnail') 

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
        <View style={detailWrapperStyles}>
          <Text style={textStyles}>Hero ID: {JSON.stringify(heroId)}</Text>
          <Text style={textStyles}>Hero Name: {name}</Text>
          <Text style={textStyles}>Hero Description: {description}</Text>
        </View>
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
  },
  textStyles: {
    color: '#fff',
    marginBottom: 4
  },
  detailWrapperStyles: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1
  }
})

export default withNavigation(Profile)