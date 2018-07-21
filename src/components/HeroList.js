import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native'
import { getCharacters } from '../api'
import HeroCard from './HeroCard'

class HeroList extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    getCharacters()
      .then(response => response.json())
      .then(d => {
        this.setState({
          data: d['data']['results']
        })
      })
      .catch(error => console.log('Error while fetching data:', error))
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        { this.state.data?
        <FlatList 
          keyExtractor={item => (item.id).toString()}
          data={this.state.data}
          renderItem={({ item }) => <HeroCard name={item.name} thumbnail={item.thumbnail} />}
        />
        : <Text style={{alignSelf:'center', color: '#fff'}}>Loading...</Text> }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})

export default HeroList