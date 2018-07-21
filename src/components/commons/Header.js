import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = () => {
  return (
    <View style={styles.headerStyles}>
      <Text style={{alignSelf:'center'}}>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyles: {
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
  }
})
export default Header