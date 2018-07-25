import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import ImageOverlay from 'react-native-image-overlay'
import { withNavigation } from 'react-navigation'

class HeroCard extends Component {

  render() {
    const { name, thumbnail, navigation, heroId } = this.props
    const { cardStyles, imgStyles } = styles

    return (
      <TouchableHighlight onPress={() => navigation.navigate('Profile', { heroId })}>
        <View style={cardStyles}>
          <ImageOverlay 
            source={{ uri: thumbnail.path + '.' + thumbnail.extension }} 
            containerStyle={imgStyles} 
            overlayColor="#000" 
            overlayAlpha={.45}
            rounded={6}>
            <Text style={{color:'#fff', fontSize: 20, fontWeight: 'bold'}}>{name.toUpperCase()}</Text>
          </ImageOverlay>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  cardStyles: {
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: .75,
    shadowRadius: 5,
  },
  imgStyles: {
    flex: 1,
    width: '100%',
    height: 150,
    paddingLeft: 10,
    paddingBottom: 5
  }
})

export default withNavigation(HeroCard)