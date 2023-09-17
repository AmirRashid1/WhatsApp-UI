import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import img1 from '../assets/images/user1.jpeg';
import img2 from '../assets/images/user2.jpeg';
import img3 from '../assets/images/user3.jpeg';
import img4 from '../assets/images/user4.jpeg';
import img5 from '../assets/images/user5.jpeg';
import img6 from '../assets/images/user6.jpeg';
import img7 from '../assets/images/user7.jpeg';
import img8 from '../assets/images/user8.jpeg';
import img9 from '../assets/images/user9.jpeg';
import img10 from '../assets/images/user10.jpeg';
import img11 from '../assets/images/user11.jpeg';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
const ChatListScreen = () => {
    const navigation = useNavigation();
    const chats = [
        {
            id: 1,
            name: 'Chat1',
            url: img1,
            message: 'Chat1 message',
            time: '12:00',
            volume: 'volume-variant-off'
        },
        {
            id: 2,
            name: 'Chat2',
            url: img2,
            message: 'Chat2 message',
            time: '12:00',
            // volume: 'volume-high'
        },
        {
            id: 3,
            name: 'Chat3',
            url: img3,
            message: 'Chat3 message',
            time: '13:00',
            // volume: 'volume-high'
        },
        {
            id: 4,
            name: 'Chat4',
            url: img4,
            message: 'Chat4 message',
            time: '14:00',
            // volume: 'volume-high'
        },
        {
            id: 5,
            name: 'Chat5',
            url: img5,
            message: 'Chat5 message',
            time: '15:00',
            // volume: 'volume-high'
        },
        {
            id: 6,
            name: 'Chat6',
            url: img6,
            message: 'Chat6 message',
            time: '16:00',
            // volume: 'volume-high'
        },
        {
            id: 7,
            name: 'Chat7',
            url: img7,
            message: 'Chat7 message',
            time: '17:00',
            // volume: 'volume-high'
        },
        {
            id: 8,
            name: 'Chat8',
            url: img8,
            message: 'Chat8 message',
            time: '18:00',
            // volume: 'volume-high'
        },
        {
            id: 9,
            name: 'Chat9',
            url: img9,
            message: 'Chat9 message',
            time: '19:00',
            // volume: 'volume-high'
        },
        {
            id: 10,
            name: 'Chat10',
            url: img10,
            message: 'Chat10 message',
            time: '110:00',
            // volume: 'volume-high'
        },
        {
            id: 11,
            name: 'Chat11',
            url: img11,
            message: 'Chat11 message',
            time: '11:00',
            // volume: 'volume-high'
        },
    ]
    return (
        <SafeAreaView className="h-full bg-gray-900  ">
            <FlatList
                data={chats}
                scrollEnabled={true}
                // style={{ flexGrow: 0.94 }}
                className="mb-8"
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.id} className=" mx-3 justify-between flex-row items-center space-y-3 p-1 "
                        onPress={() => navigation.navigate('ChatScreen', { chats: item })} activeOpacity={0.6}>
                        <View className="flex-row space-x-5 items-center ">
                            <Image source={item.url} className="w-10 h-10 rounded-2xl mt-3" />
                            <View className="">
                                <Text className="text-white opacity-60">{item.name}</Text>
                                <Text className="text-white opacity-60">{item.message}</Text>
                            </View>
                        </View>
                        <View className="space-y-1 items-center">
                            <Text className="text-xs text-white opacity-60">{item.time}</Text>
                            <MaterialCommunityIcons name={item.volume} size={19} color="#404040" />
                        </View>

                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity className="absolute bottom-4 opacity-60 right-6 bg-cyan-600 p-2.5 rounded-3xl" activeOpacity={0.7} onPress={() => { }}>
                <MaterialIcons name='message' size={27} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}


export default ChatListScreen