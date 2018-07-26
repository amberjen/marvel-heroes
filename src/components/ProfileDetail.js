import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProfileDetail = ({ name, description, thumbnail, wiki }) => {

  const { containerStyles, textStyles } = styles

  return (
    <View style={containerStyles}>
      <Text style={textStyles}>{name}</Text>
      <Text style={textStyles}>{description}</Text>
      <Text style={textStyles}>{wiki.url}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1
  },
  textStyles: {
    color: '#fff',
    marginBottom: 4
  }
})

export default ProfileDetail