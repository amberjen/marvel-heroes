import React from 'react'
import { ScrollView, FlatList, StyleSheet } from 'react-native'
import ComicItem from './ComicItem'

const ComicList = ({ data }) => {

  const { containerStyles } = styles

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
  }
})

export default ComicList