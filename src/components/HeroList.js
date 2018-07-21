import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
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
      <View style={styles.container}>
        { this.state.data?
        <FlatList 
          keyExtractor={item => (item.id).toString()}
          data={this.state.data}
          renderItem={({ item }) => <HeroCard name={item.name} thumbnail={item.thumbnail.path} />}
        />
        : <Text>Loading...</Text> }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
    // paddingTop: 20,
    // paddingLeft: 20,
    // paddingRight: 20
  }
})

export default HeroList