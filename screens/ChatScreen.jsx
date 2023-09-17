import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'

const ChatScreen = ({ route }) => {
    const { chats } = route.params;
    return (
        <View className="flex-1">
            <ChatHeader img={chats.url} name={chats.name} />
            <ImageBackground source={require('../assets/images/wallpaper.jpeg')} resizeMode='cover' className="w-full h-full">
                <ChatBody />
            </ImageBackground>
            <ChatFooter />
        </View>
    )
}

export default ChatScreen;