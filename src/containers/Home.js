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

    return (
      <View style={{flex: 1}}>
        <Header>
          <SearchBar onChangeText={filterHeroList} value={searchTerm} />
        </Header>
        <HeroList data={data} isLoading={isLoading} error={error} searchTerm={searchTerm} />
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
    error: state.heroList.error,
    searchTerm: state.heroList.searchTerm
  }
}

export default connect(mapStateToProps, { getAllHeroes, filterHeroList })(Home)