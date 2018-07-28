import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ({ onChangeText, value }) => {
  const { inputStyles, iconStyles } = styles
  return (
    <View style={{flex: 1, height: 40}}>
      <Ionicons name="ios-search" size={25} color="rgba(0,0,0,.15)" style={iconStyles} />
      <TextInput
        style={inputStyles}
        placeholder="Search characters"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
    top: 8,
    left: 10
  }
})
export default SearchBar