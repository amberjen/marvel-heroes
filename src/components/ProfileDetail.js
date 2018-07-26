import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, Button } from 'react-native'
import { WebBrowser } from 'expo'
import ImageOverlay from 'react-native-image-overlay'

const ProfileDetail = ({ name, description, thumbnail, wikiUrl }) => {

  const { 
    containerStyles, 
    textBaseStyles, 
    titleStyles,
    bgImgStyles, 
    thumbnailStyles,
    topInnerStyles,
    infoContainerStyles,
    linkBtnStyles 
  } = styles

  let thumbnailUrl = thumbnail.path + '.' + thumbnail.extension

  return (
    <ScrollView style={containerStyles}>
      {/* ---- Top ----  */}
      <ImageOverlay 
        source={require('../assets/marvel-city-bg.jpg')} 
        containerStyle={bgImgStyles} 
        overlayColor="#000" 
        overlayAlpha={.85}>
      <View style={topInnerStyles}>
        <Image
          source={{uri: thumbnailUrl}}
          style={thumbnailStyles} />
        <Text style={[textBaseStyles, titleStyles]}>{name}</Text>
      </View>  
      </ImageOverlay>
      
      {/* ---- Bottom ----  */}
      <View style={infoContainerStyles}>
        <Text style={textBaseStyles}>{description}</Text>
        <Button 
          title="Official Wiki"
          onPress={() => WebBrowser.openBrowserAsync(wikiUrl)}
          style={linkBtnStyles}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    paddingBottom: 20,
    flex: 1
  },
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
  },
  infoContainerStyles: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20
  },
  linkBtnStyles: {
    backgroundColor: 'rgb(219, 56, 50)',
    color: '#fff'
  }
})

export default ProfileDetail