import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { getHeroComics } from '../actions'

import { withNavigation } from 'react-navigation'
import { SimpleLineIcons } from '@expo/vector-icons'

import Header from '../components/commons/Header'
import ProfileDetail from '../components/ProfileDetail'

class Profile extends Component {

  state ={
    heroId: '',
    name: '',
    description: '',
    thumbnail: '',
    wikiUrl: ''
  }

  componentDidMount() {
    const { navigation, getHeroComics } = this.props

    let heroId = navigation.getParam('heroId', 'No ID')
    let name = navigation.getParam('name', 'No name')
    let description = navigation.getParam('description', 'No description')
    let thumbnail = navigation.getParam('thumbnail', 'No thumbnail')

    let wiki = navigation.getParam('wiki', 'No wiki') 
    let rawUrl = wiki[0]['url']
    let strToRemove = rawUrl.indexOf('?utm_campaign')
    let newUrl = rawUrl.slice(0, strToRemove)


    this.setState({
      // Get the param, provide a fallback value if not available
      heroId,
      name,
      description,
      thumbnail,
      wikiUrl: newUrl
    })

    getHeroComics(heroId)
  }
    
  render() {
    const { navigation, comicData, isComicsLoading, fetchingComicsError } = this.props

    const { heroId, name, description, thumbnail, wikiUrl } = this.state

    const { 
      containerStyles, 
      headerInnerStyles, 
      btnStyles, 
      btnWrapperStyles 
    } = styles

    return (
      <View style={containerStyles}>
        <Header>
          <View style={headerInnerStyles}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')}
              style={btnWrapperStyles}>
              <SimpleLineIcons name="arrow-left" size={16} color="#fff" />
              <Text style={btnStyles}>Back</Text>
            </TouchableOpacity>
          </View>
        </Header>
        <ProfileDetail
          name={name}
          description={description}
          thumbnail={thumbnail}
          wikiUrl={wikiUrl}
          comicData={comicData}
          isComicsLoading={isComicsLoading}
          fetchingComicsError={fetchingComicsError} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)'
  },
  btnWrapperStyles: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnStyles: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 4
  },
  headerInnerStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  }
})

const mapStateToProps = state => {
  return {
    comicData: state.comicList.data,
    isComicsLoading: state.comicList.isLoading,
    fetchingComicsError: state.comicList.error
  }
}

export default connect(mapStateToProps, { getHeroComics })(withNavigation(Profile))