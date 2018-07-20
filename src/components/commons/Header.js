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
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderBottomWidth: 2
  }
})
export default Header