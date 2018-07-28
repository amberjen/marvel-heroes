import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableHighlight, CameraRoll } from 'react-native'
import { WebBrowser } from 'expo'
import ImageOverlay from 'react-native-image-overlay'
import { Entypo, Ionicons } from '@expo/vector-icons'
import ComicList from './ComicList'
import Section from './commons/Section'

const ProfileDetail = ({ 
  name, 
  description, 
  thumbnail, 
  wikiUrl, 
  comicData, 
  isComicsLoading, 
  fetchingComicsError }) => {

  const { 
    containerStyles, 
    textBaseStyles, 
    titleStyles,
    bgImgStyles, 
    thumbnailStyles,
    topInnerStyles,
    infoContainerStyles,
    btnStyles,
    btnInnerStyles,
    btnTextStyles,
    shadowStyles
  } = styles

  let thumbnailUrl = thumbnail.path + '.' + thumbnail.extension

  if (fetchingComicsError) {
    console.log('Error while fetching ComicList data:', error)
  }

  getDescription = (content) => {
    if(content === '') {
      return <Text style={textBaseStyles}>N/A</Text>
    } else {
      return <Text style={textBaseStyles}>{description}</Text>
    }
  }

  return (
    <ScrollView style={containerStyles}>
      {/* ---- Top ----  */}
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
      
      {/* ---- Bottom ----  */}
      <View style={infoContainerStyles}>
        <Section title="DESCRIPTION" padding>
          {this.getDescription(description)}
        </Section>
        
        <Section title="RECENT COMICS">
          <ComicList data={comicData} isLoading={isComicsLoading} />
        </Section>
        
        <View style={{paddingLeft: 10, paddingRight: 10}}>
          <TouchableHighlight
            underlayColor="rgba(250, 250, 250, .1)" 
            style={[btnStyles, {marginBottom: 10}]}
            onPress={() => WebBrowser.openBrowserAsync(wikiUrl)}>
            <View style={btnInnerStyles}>
              <Entypo name="link" size={18} color="#fff" />
              <Text style={[textBaseStyles, btnTextStyles]}>Official Wiki</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight 
            underlayColor="rgba(250, 250, 250, .1)"
            style={btnStyles}
            onPress={() => 
              CameraRoll.saveToCameraRoll(thumbnailUrl)
                .then(res => console.log('res', 'Image saved!'))
                .catch(err => console.log('Error while saving image', err))}>
            <View style={btnInnerStyles}>
              <Ionicons name="md-download" size={18} color="#fff" />
              <Text style={[textBaseStyles, btnTextStyles, { marginLeft: 8}]}>Save Poster</Text>
            </View>
          </TouchableHighlight>
        </View>        
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
  },
  infoContainerStyles: {
    paddingTop: 20,
  },
  btnStyles: {
    backgroundColor: 'rgba(250, 250, 250, .25)',
    padding: 10,
    borderRadius: 4,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20
  },
  btnInnerStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30
  },
  btnTextStyles: {
    fontSize: 16,
    marginLeft: 4
  }
})

export default ProfileDetail