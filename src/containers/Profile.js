import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Profile = ({ navigation }) => {
    return (
        <View>
            <Text>Profile</Text>
            <Button title="Go back" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default Profile