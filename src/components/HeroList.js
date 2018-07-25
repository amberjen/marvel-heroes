import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, FlatList } from 'react-native'
import HeroCard from './HeroCard'

const HeroList = ({ data, isLoading, error }) => {
  const { containerStyles, loadingStyles } = styles
  
  if (isLoading) {
    return <Text style={loadingStyles}>Loading...</Text>
  }

  if (error) {
    return <Text style={loadingStyles}>Error while fetching data: {error}</Text>
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
    color: '#fff',
    alignSelf: 'center', 
    paddingTop: 20
  }
})

export default HeroList