import React, { Component } from 'react'
import { ScrollView, StyleSheet, FlatList } from 'react-native'
import HeroCard from './HeroCard'

const HeroList = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        keyExtractor={item => (item.id).toString()}
        data={data}
        renderItem={({ item }) => <HeroCard name={item.name} thumbnail={item.thumbnail} />}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})

export default HeroList