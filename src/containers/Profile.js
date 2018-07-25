import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Profile = ({ navigation }) => {

    const heroId = navigation.getParam('heroId', 'no id')
    return (
        <View>
            <Text>Profile</Text>
            <Text>Hero: {heroId}</Text>
            <Button title="Go back" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default Profile