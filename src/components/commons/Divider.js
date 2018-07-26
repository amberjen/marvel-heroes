import React from 'react'
import { View, StyleSheet } from 'react-native'

const Divider = () => {
  return (
    <View
      style={styles.dividerStyles} />
  )
}

const styles = StyleSheet.create({
  dividerStyles: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'rgba(250, 250, 250, .15)',
    marginTop: 10,
    marginBottom: 10
  }
})

export default Divider