import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors';
import EvilIcons from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/whatsapp-logo.png')} style={styles.logoStyle} />
            <View style={styles.iconStyle} className="space-x-3">
                <EvilIcons name="camera" size={24} color={Colors.secondaryColor} />
                <Ionicons name="search" size={24} color={Colors.secondaryColor} />
                <Entypo name="dots-three-vertical" size={24} color={Colors.secondaryColor} />
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logoStyle: {
        height: 23,
        width: 90
    },
    iconStyle: {
        flexDirection: 'row',

    }
})

export default Header