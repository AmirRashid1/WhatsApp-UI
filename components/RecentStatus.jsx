import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import status1 from '../assets/images/status1.jpeg';
import status3 from '../assets/images/status3.jpg';
import FullModels from '../utils/FullModels';
const RecentStatus = () => {
    const [showStatusModel, setShowStatusModel] = useState(true);
    console.log('status', showStatusModel);
    // const setTimeUp = itemId => {
    //     setShowStatusModel(prev => ({ ...prev, [itemId]: false }));
    // }

    const setTimeUp = (itemId) => {
        setShowStatusModel((prev) => ({ ...prev, [itemId]: false }));
    };

    const viewStatus = (itemId) => {
        setShowStatusModel((prev) => ({ ...prev, [itemId]: true }));
    };
    const recentstatus = [
        {
            id: 1,
            name: 'Person 1',
            url: status1,
            day: 'Today',
            time: '09:23',
            hours: 'PM'
        },
        {
            id: 2,
            name: 'Person 2',
            url: status3,
            day: 'Yesterday',
            time: '08:09',
            hours: 'AM'
        }
    ]

    return (
        <View className="mx-3">
            <Text className="text-white opacity-50 my-4">Recent updates</Text>
            {recentstatus.map((item) => (
                <View key={item.id}>
                    <TouchableOpacity className="flex-row my-2 space-x-5 items-center" activeOpacity={0.6} onPress={() => viewStatus(item.id)}>
                        <View className="border-[2px] border-green-500 rounded-3xl">
                            <Image source={item.url} resizeMode='cover' className="w-11 h-11 m-[2px]  rounded-3xl" />
                        </View>
                        <View className=" space-y-1">
                            <Text className="text-white font-semibold">{item.name}</Text>
                            <Text className="text-white opacity-40">{item.day}, {item.time} {item.hours}</Text>
                        </View>
                    </TouchableOpacity>
                    <FullModels setShowStatusModel={value => setShowStatusModel(prev => ({ ...prev, [item.id]: value }))} item={item} showStatusModel={showStatusModel[item.id]} setTimeUp={() => setTimeUp(item.id)} />
                </View>
            ))}
        </View>
    )
}


export default RecentStatus;