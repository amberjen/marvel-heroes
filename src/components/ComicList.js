import React from 'react'
import { ScrollView, FlatList, StyleSheet, View, ActivityIndicator } from 'react-native'
import ComicItem from './ComicItem'

const ComicList = ({ data, isLoading }) => {

  const { containerStyles, loadingWrapperStyles, loadingBoxStyles } = styles

  if(isLoading) {
    return (
      <View style={loadingWrapperStyles}>
        <View style={[loadingBoxStyles, {marginRight: 20}]}>
          <ActivityIndicator size="large" color="rgba(250, 250, 250, .25)"/>
        </View>
        <View style={loadingBoxStyles}>
          <ActivityIndicator size="large" color="rgba(250, 250, 250, .25)"/>
        </View>
      </View>  
    )
  }

  return(
    <ScrollView horizontal={true} style={containerStyles}>
      <FlatList
        data={data}
        keyExtractor={item => (item.id).toString()}
        horizontal={true}
        renderItem={({ item }) => 
          <ComicItem 
            title={item.title}
            description={item.description}
            thumbnail={item.thumbnail} />
        } />
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1
  },
  loadingWrapperStyles: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10
  },
  loadingBoxStyles: {
    width: 150, 
    height: 200, 
    backgroundColor:'rgba(250, 250, 250, .05)',
    justifyContent: 'center'
  }
})

export default ComicList