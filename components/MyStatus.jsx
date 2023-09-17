import { View, Text, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/dist/Entypo'
const MyStatus = () => {
    return (
        <View className="flex-row m-4 space-x-5 items-center">
            <View className="">
                <Image source={require('../assets/images/status2.jpeg')} resizeMode='cover' className="w-12 h-12 rounded-3xl" />
                <View className="absolute bottom-0 left-8">
                    <Entypo name="circle-with-plus" size={22} color="#00e68a" />
                </View>
            </View>
            <View className=" space-y-1">
                <Text className="text-white font-semibold">My Status</Text>
                <Text className="text-white opacity-40">Tap to add status update</Text>
            </View>
        </View>
    )
}

export default MyStatus