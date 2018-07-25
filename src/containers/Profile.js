import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

class Profile extends Component {
    
    render() {
        const { navigation } = this.props
        const { containerStyles } = styles

        // Get the param, provide a fallback value if not available
        const heroId = navigation.getParam('heroId', 'no id')

        return (
            <View style={containerStyles}>
                <Text>Profile</Text>
                <Text>Hero: {JSON.stringify(heroId)}</Text>
                <Button title="Go back" onPress={() => navigation.navigate('Home')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyles: {
        flex: 1
    }
})

export default withNavigation(Profile)