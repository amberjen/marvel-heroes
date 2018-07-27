import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Section = ({ title, padding, children }) => {

  const { sectionStyles, paddingStyles, titleStyles } = styles

  return (
    <View style={[sectionStyles, padding && paddingStyles]}>
      <Text style={[titleStyles, !padding && paddingStyles]}>{title}</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  sectionStyles: {
    marginBottom: 30
  },
  paddingStyles: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleStyles: {
    color: 'rgba(250, 250, 250, .35)',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 5
  }
})

export default Section