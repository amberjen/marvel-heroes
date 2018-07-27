import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableHighlight, FlatList } from 'react-native'
import { WebBrowser } from 'expo'
import ImageOverlay from 'react-native-image-overlay'
import { Entypo } from '@expo/vector-icons'
import ComicList from './ComicList'
import Section from './commons/Section'
import Divider from './commons/Divider'

const ProfileDetail = ({ name, description, thumbnail, wikiUrl, comicData, isComicsLoading, fetchingComicsError }) => {

  const { 
    containerStyles, 
    textBaseStyles, 
    titleStyles,
    bgImgStyles, 
    thumbnailStyles,
    topInnerStyles,
    infoContainerStyles,
    linkBtnStyles,
    linkBtnInnerStyles,
    linkBtnTextStyles
  } = styles

  let thumbnailUrl = thumbnail.path + '.' + thumbnail.extension

  if (fetchingComicsError) {
    console.log('Error while fetching ComicList data:', error)
  }

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
        <Section title="DESCRIPTION" padding>
          <Text style={textBaseStyles}>{description}</Text>
        </Section>
        
        <Section title="COMICS">
          <ComicList data={comicData} />
        </Section>
        
        <TouchableHighlight 
          style={linkBtnStyles}
          onPress={() => WebBrowser.openBrowserAsync(wikiUrl)}>
          <View style={linkBtnInnerStyles}>
            <Entypo name="link" size={16} color="#fff" />
            <Text style={[textBaseStyles, linkBtnTextStyles]}>Official Wiki</Text>
          </View>
        </TouchableHighlight>
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
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingTop: 20
  },
  linkBtnStyles: {
    backgroundColor: 'rgb(219, 56, 50)',
    padding: 10,
    borderRadius: 4,
    width: 170,
    alignSelf: 'center'
  },
  linkBtnInnerStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30
  },
  linkBtnTextStyles: {
    fontSize: 16,
    marginLeft: 4
  }
})

export default ProfileDetail