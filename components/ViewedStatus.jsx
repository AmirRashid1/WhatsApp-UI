import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import staus1 from '../assets/images/status1.jpeg';
import staus3 from '../assets/images/status3.jpg';
const ViewedStatus = () => {
    const recentstatus = [
        {
            id: 1,
            name: 'Person 1',
            url: staus1,
            day: 'Today',
            time: '09:23',
            hours: 'PM'
        },
        {
            id: 2,
            name: 'Person 2',
            url: staus3,
            day: 'Today',
            time: '08:10',
            hours: 'AM'
        },
        {
            id: 3,
            name: 'Person 3',
            url: staus1,
            day: 'Today',
            time: '02:36',
            hours: 'PM'
        },
        {
            id: 4,
            name: 'Person 4',
            url: staus3,
            day: 'Yesterday',
            time: '05:35',
            hours: 'AM'
        },
        {
            id: 5,
            name: 'Person 5',
            url: staus1,
            day: 'Today',
            time: '09:23',
            hours: 'PM'
        },
        {
            id: 6,
            name: 'Person 6',
            url: staus3,
            day: 'Today',
            time: '08:10',
            hours: 'AM'
        },
        {
            id: 7,
            name: 'Person 7',
            url: staus1,
            day: 'Today',
            time: '02:36',
            hours: 'PM'
        },
        {
            id: 8,
            name: 'Person 8',
            url: staus3,
            day: 'Yesterday',
            time: '05:35',
            hours: 'AM'
        }
    ]
    return (
        <View className="mx-3 mb-10">
            <Text className="text-white opacity-50 my-4">Viewed updates</Text>
            {recentstatus.map((item) => (
                <TouchableOpacity className="flex-row my-2 space-x-5 items-center" key={item.id} activeOpacity={0.6}>
                    <View className="border-[2px] border-gray-500 rounded-3xl">
                        <Image source={item.url} resizeMode='cover' className="w-11 h-11 m-[2px]  rounded-3xl" />
                    </View>
                    <View className=" space-y-1">
                        <Text className="text-white font-semibold">{item.name}</Text>
                        <Text className="text-white opacity-40">{item.day}, {item.time} {item.hours}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default ViewedStatus