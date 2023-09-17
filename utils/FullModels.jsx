import { View, Text, Modal, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import status3 from '../assets/images/status3.jpg';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import user1 from '../assets/images/user1.jpeg';
import ProgressBar from './ProgressBar';
import { useNavigation } from '@react-navigation/native';
const FullModels = props => {
    const navigation = useNavigation();
    const { showStatusModel, setshowStatusModel, item, setTimeUp } = props;
    // const updateStatusModel = () => {
    //     setshowStatusModel(prev => ({ ...prev, [item.id]: false }))
    // }
    const updateStatusModel = () => {
        setshowStatusModel(prev => ({ ...prev, [item.id]: false }));
    };
    return (
        <View className="h-full">
            <Modal
                animationType='fade'
                visible={showStatusModel}
                onRequestClose={updateStatusModel}
            >
                <ProgressBar setTimeUp={setTimeUp} />
                <View className=" px-2 py-2 bg-gray-800 flex-row justify-between items-center">
                    <View className="flex-row items-center space-x-4">
                        <TouchableOpacity onPress={() => setshowStatusModel(prev => ({ ...prev, [item.id]: false }))}>
                            <Ionicons name="chevron-back" size={28} color="#fff" />
                        </TouchableOpacity>
                        <Image source={user1} className="w-12 h-12 rounded-3xl" />
                        <Text className="text-white tracking-widest text-sm font-semibold">Ammy jain</Text>
                    </View>
                    <Feather name="more-vertical" size={26} color="#fff" />
                </View>
                <Image source={status3} resizeMode='cover' className="w-full self-center h-4/5" />
                <View className="items-center  bg-gray-800 h-full space-y-1.5">
                    <Text className="text-white  text-lg ">My latest activities</Text>
                    <Ionicons name="chevron-up-outline" size={20} color="#b3b3b3" onPress={() => setshowStatusModel(prev => ({ ...prev, [item.id]: false }))} />
                    <Text className="text-white text-lg opacity-70">Reply</Text>
                </View>

            </Modal>
        </View>
    )
}

export default FullModels