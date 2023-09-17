import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


const CommunityScreen = () => {
    return (
        <ScrollView className="bg-gray-900 ">
            <Image source={require('../assets/images/community-img.png')} resizeMode='contain'
                //  style={styles.imgStyle}
                className="w-4/5 h-40 mx-3 items-center justify-center mt-20"
            />
            <Text className="text-white font-semibold text-lg mx-auto">Introducing communities</Text>
            <Text className="text-gray-300 w-4/5 mt-2 leading-5 text-justify mx-auto">Easily organise your related grups and send announcements. Now your communities,
                like neighbourhood or schools, can have their own space.</Text>
            <TouchableOpacity className="bg-green-600 items-center mx-10 px-3 py-2 rounded-xl mt-8" activeOpacity={0.7}>
                <Text className="text-white font-semibold tracking-wider">Start your community</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

// const styles = StyleSheet.create({
//     imgStyle: {
//         width: 380,
//         height: 200,
//         marginTop: 180
//     }
// })
export default CommunityScreen