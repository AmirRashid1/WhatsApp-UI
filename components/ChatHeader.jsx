import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/Colors';
const ChatHeader = ({ img, name }) => {
    const navigation = useNavigation();
    return (
        <View className="flex-row justify-between items-center py-2 px-1" style={styles.HeaderStyle}>
            <View className="flex-row space-x-4 items-center">
                <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
                    <Ionicons name="chevron-back" size={28} color='#2eb82e' />
                </TouchableOpacity>
                <Image source={img} resizeMode='cover' className="w-9 h-9 rounded-2xl" />
                <Text className="text-white font-semibold tracking-widest w-44">{name}</Text>
            </View>
            <View className="flex-row ">
                <View className="flex-row space-x-4">
                    <FontAwesome name="video-camera" size={20} color="#fff" />
                    <Ionicons name="call" size={20} color="#fff" />
                    <Feather name="more-vertical" size={20} color="#fff" />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    HeaderStyle: {
        backgroundColor: Colors.primaryColor
    }
})
export default ChatHeader