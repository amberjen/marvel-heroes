import React from 'react'
import { ScrollView, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import HeroCard from './HeroCard'

const HeroList = ({ data, isLoading, error }) => {
  const { containerStyles, loadingStyles } = styles
  
  if (isLoading) {
    return (
      <View style={loadingStyles}>
        <ActivityIndicator size="large" color="rgba(250, 250, 250, .5)" />
      </View>
    )
  }

  if (error) {
    console.log('Error while fetching HeroList data:', error)
  }

  return (
    <ScrollView style={containerStyles}>
      <FlatList
        keyExtractor={item => (item.id).toString()}
        data={data}
        renderItem={({ item }) => 
          <HeroCard 
            name={item.name} 
            thumbnail={item.thumbnail}
            description={item.description}
            wiki={item.urls} 
            heroId={item.id} />
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    paddingTop: 20
  },
  loadingStyles: {
    alignSelf: 'center', 
    paddingTop: 20
  }
})

export default HeroList