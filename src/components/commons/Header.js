import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  const { inputStyles, headerStyles, iconStyles } = styles
  return (
    <View style={headerStyles}>
      <Ionicons name="ios-search" size={25} color="rgba(0,0,0,.15)" style={iconStyles} />
      <TextInput
        style={inputStyles}
        placeholder="Search heroes"        
        />
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyles: {
    flexDirection: 'row',
    backgroundColor: 'rgb(219, 56, 50)',
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: .35,
    shadowRadius: 2,
  },
  inputStyles: {
    height: 40,
    backgroundColor: 'rgba(0,0,0,.15)',
    borderRadius: 4,
    paddingLeft: 35,
    paddingRight: 10,
    flex: 1
  },
  iconStyles: {
    position: 'absolute',
    top: 32.5,
    left: 20
  }
})
export default Header