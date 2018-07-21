import React, { Component } from 'react'
import { ScrollView, StyleSheet, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
import { getAllHeroes } from '../actions'
import HeroCard from './HeroCard'

class HeroList extends Component {

  componentDidMount() {
    this.props.getAllHeroes()
  }

  render() {
    const { data, isLoading } = this.props
    const { loadingStyles } = styles
    
    return (
      <ScrollView style={styles.container}>
        { isLoading ?
          <Text style={loadingStyles}>Loading...</Text>
          : <FlatList 
              keyExtractor={item => (item.id).toString()}
              data={data}
              renderItem={({ item }) => <HeroCard name={item.name} thumbnail={item.thumbnail} />}
            /> }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  loadingStyles: {
    color: '#fff',
    alignSelf: 'center'
  }
})

const mapStateToProps = state => {
  return {
    data: state.heroList.data,
    isLoading: state.heroList.isLoading,
  }
}

export default connect(mapStateToProps, { getAllHeroes })(HeroList)