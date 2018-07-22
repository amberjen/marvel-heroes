import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { getAllHeroes } from '../actions'

import Header from '../components/commons/Header'
import HeroList from '../components/HeroList'
import SearchBar from '../components/SearchBar'

class Home extends Component {

  componentDidMount() {
    this.props.getAllHeroes()
  }

  render() {
    const { data, isLoading } = this.props
    const { loadingStyles } = styles

    return (
      <View style={{flex: 1}}>
        <Header>
          <SearchBar />
        </Header>
        { isLoading? 
          <Text style={loadingStyles}>Loading...</Text>
          : <HeroList data={data} /> }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loadingStyles: {
    color: '#fff',
    alignSelf: 'center',
    paddingTop: 20
  }
})

const mapStateToProps = state => {
  return {
    data: state.heroList.data,
    isLoading: state.heroList.isLoading,
  }
}

export default connect(mapStateToProps, { getAllHeroes })(Home)