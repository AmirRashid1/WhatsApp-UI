import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Entypo from 'react-native-vector-icons/dist/Entypo'
const ChatFooter = () => {
    const [Message, setMessage] = useState('');
    const [sendEnable, setSendEnable] = useState(false);
    const onChange = (value) => {
        setMessage(value);
        setSendEnable(value);
    }
    return (
        <View className="bg-black h-20 space-x-1 flex-row items-center pr-2 absolute bottom-0 w-full">
            <View className="flex-row items-center bg-slate-800 w-10/12 mx-2 rounded-2xl pr-4 pl-2 space-x-2 ">
                <MaterialIcons name="emoji-emotions" size={24} color="#fff" />
                <TextInput onChangeText={value => onChange(value)} placeholder='Message... ' placeholderTextColor="gray" cursorColor="green" className="rounded-xl text-white py-2 w-3/5 " />
                <Entypo name="attachment" size={23} color="#fff" />
                <MaterialIcons name="currency-rupee" size={23} color="#fff" />
                <Entypo name="camera" size={23} color="#fff" />
            </View>
            {sendEnable ?
                <View className="bg-green-700 p-2 rounded-3xl">
                    <MaterialIcons name="send" size={23} color="#fff" />
                </View>
                :
                <View className="bg-green-700 p-2 rounded-3xl">
                    <MaterialIcons name="mic" size={23} color="#fff" />
                </View>
            }

        </View>
    )
}

export default ChatFooter