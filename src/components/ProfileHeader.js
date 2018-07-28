import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import ImageOverlay from 'react-native-image-overlay'

const ProfileHeader = ({ name, thumbnail }) => {

  const { 
    textBaseStyles, 
    titleStyles,
    bgImgStyles, 
    thumbnailStyles,
    topInnerStyles,
    shadowStyles
  } = styles

  let thumbnailUrl = thumbnail.path + '.' + thumbnail.extension

  return (
    <ImageOverlay 
        source={require('../assets/marvel-bg-mono-3.jpg')} 
        containerStyle={bgImgStyles} 
        overlayColor="#000" 
        overlayAlpha={.55}>
      <View style={topInnerStyles}>
        <View style={shadowStyles}>
          <Image
            source={{uri: thumbnailUrl}}
            style={thumbnailStyles} />
         </View> 
        <Text style={[textBaseStyles, titleStyles]}>{name}</Text>
      </View>  
    </ImageOverlay>
  )
}

const styles = StyleSheet.create({
  textBaseStyles: {
    color: '#fff',
  },
  titleStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center'
  },
  topInnerStyles: {
    flex: 1, 
    width: 250,
    justifyContent: 'center'
  },
  shadowStyles: {
    shadowColor: '#000',
    shadowOffset: {
      height: 2
    },
    shadowOpacity: .75,
    shadowRadius: 5
  },
  bgImgStyles: {
    flex: 1,
    width: '100%',
    height: 275,
    justifyContent: 'flex-end',
    overflow: 'visible',
    paddingTop: 20,
    paddingBottom: 20
  },
  thumbnailStyles: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    alignSelf: 'center',
    zIndex: 999
  }
})

export default ProfileHeader
