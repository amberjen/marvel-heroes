import React from 'react'
import { View, StyleSheet } from 'react-native'

const Header = ({children}) => {

  const { headerStyles } = styles

  return (
    <View style={headerStyles}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyles: {
    flexDirection: 'row',
    backgroundColor: 'rgb(219, 56, 50)', // 'rgb(232, 39, 48)'
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