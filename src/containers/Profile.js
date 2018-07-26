import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { SimpleLineIcons } from '@expo/vector-icons'

import Header from '../components/commons/Header'
import ProfileDetail from '../components/ProfileDetail'

class Profile extends Component {
    
  render() {
    const { navigation } = this.props
    const { 
      containerStyles, 
      headerInnerStyles, 
      btnStyles, 
      btnWrapperStyles 
    } = styles

    // Get the param, provide a fallback value if not available
    const heroId = navigation.getParam('heroId', 'No ID')
    const name = navigation.getParam('name', 'No name')
    const description = navigation.getParam('description', 'No description')
    const thumbnail = navigation.getParam('thumbnail', 'No thumbnail') 
    const wiki = navigation.getParam('wiki', 'No wiki') 

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
        <ProfileDetail
          name={name}
          description={description}
          thumbnail={thumbnail}
          wiki={wiki[0]} />
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