import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { getAllHeroes, filterHeroList } from '../actions'

import Header from '../components/commons/Header'
import HeroList from '../components/HeroList'
import SearchBar from '../components/SearchBar'

class Home extends Component {

  componentDidMount() {
    this.props.getAllHeroes()
  }

  render() {
    const { data, isLoading, error, filterHeroList, searchTerm } = this.props
    const { containerStyles } = styles

    return (
      <View style={containerStyles}>
        <Header>
          <SearchBar onChangeText={filterHeroList} value={searchTerm} />
        </Header>
        <HeroList data={data} isLoading={isLoading} error={error} searchTerm={searchTerm} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)'
  }
})

const mapStateToProps = state => {
  return {
    data: state.heroList.data,
    isLoading: state.heroList.isLoading,
    error: state.heroList.error,
    searchTerm: state.heroList.searchTerm
  }
}

export default connect(mapStateToProps, { getAllHeroes, filterHeroList })(Home)