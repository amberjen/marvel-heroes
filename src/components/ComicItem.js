import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ComicItem = ({ title, thumbnail }) => {

  const { containerStyles, shadowStyles, imgStyles, titleStyles } = styles
  
  let thumbnailUrl = thumbnail.path + '.' + thumbnail.extension

  return(
    <View style={containerStyles}>
      <View style={shadowStyles}>
        <Image 
          source={{uri: thumbnailUrl}}
          style={imgStyles} />
      </View>  
      <Text style={titleStyles}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
    marginLeft: 10
  },
  imgStyles: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10
  },
  shadowStyles: {
    shadowColor: '#000',
    shadowOffset: {
      height: 2
    },
    shadowOpacity: .75,
    shadowRadius: 5
  },
  titleStyles: {
    color: '#fff',
    width: 150,
    fontSize: 12
  }
})

export default ComicItem