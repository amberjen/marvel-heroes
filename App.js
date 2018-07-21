import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getCharacters } from './src/api'
import HeroList from './src/components/HeroList'
import Header from './src/components/commons/Header'

export default class App extends React.Component {
  state = {
    data: null,
    isLoading: false
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    getCharacters()
      .then(response => response.json())
      .then(d => {
        this.setState({
          data: d['data']['results'],
          isLoading: false
        })
      })
      .catch(error => console.log('Error while fetching data:', error))
  }

  render() {
    const { data, isLoading } = this.state
    const { loadingStyles } = styles

    return (
      <View style={styles.container}>
        <Header />
        { isLoading ? 
          <Text style={loadingStyles}>Loading...</Text>
          : <HeroList data={data} /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)'
  },
  loadingStyles: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: 20
  }
});
