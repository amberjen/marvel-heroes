import React from 'react'
import { ScrollView, FlatList, StyleSheet, View, Text } from 'react-native'
import ComicItem from './ComicItem'

const ComicList = ({ data, isLoading }) => {

  const { containerStyles, loadingWrapperStyles, loadingTextStyles } = styles

  if(isLoading) {
    return (
      <View style={loadingWrapperStyles}>
        <Text style={loadingTextStyles}>Loading comics...</Text>
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
        } 
      />
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1
  },
  loadingWrapperStyles: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  loadingTextStyles: {
    color: '#fff'
  }
})

export default ComicList