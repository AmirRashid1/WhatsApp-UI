import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import { usermessages } from '../utils/UserMessageData';
import { othermessages } from '../utils/OtherMessageData';
const UserMessageView = ({ msg, time, hours }) => {
    return (
        <View className=" ml-auto mr-2 px-2 py-1 my-2 bg-green-700  rounded-l-xl rounded-br-xl ">
            <Text className="text-white ">{msg}</Text>
            <View className="items-end justify-end flex-row space-x-2">
                <Text className="text-xs text-gray-800">{time} {hours}</Text>
                <Ionicons name="checkmark-done" size={18} color="#b3b3b3" />
            </View>
        </View>
    )
};

const OtherUserMessageView = ({ msg, time, hours }) => {
    return (
        <View className="ml-4 mr-auto px-2 py-1 my-8 bg-gray-800 rounded-r-xl rounded-bl-xl space-y-2">
            <Text className="text-white ">{msg}</Text>
            <View className="items-end justify-end ">
                <Text className="text-xs text-gray-400">{time} {hours}</Text>
            </View>
        </View>
    )
};

const ChatBody = () => {
    const scrollViewRef = useRef();
    const messages = [];
    // Combine messages in an alternating fashion
    for (let i = 0; i < Math.max(usermessages.length, othermessages.length); i++) {
        if (i < usermessages.length) {
            messages.push(<UserMessageView key={`user-${i}`} msg={usermessages[i].message} time={usermessages[i].time} hours={usermessages[i].hours} />);
        }
        if (i < othermessages.length) {
            messages.push(<OtherUserMessageView key={`other-${i}`} msg={othermessages[i].message} time={othermessages[i].time} hours={othermessages[i].hours} />);
        }
    }

    const scrollToBottom = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    }
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef} onContentSizeChange={scrollToBottom}>
                {messages}
            </ScrollView>
            <TouchableOpacity onPress={scrollToBottom} className="relative bottom-36 items-start px-2 py-1 ml-auto rounded-l-xl border border-black w-14 right-0 bg-gray-700 opacity-60">
                <Ionicons name="chevron-down-circle-outline" size={32} color="#3333ff" />
            </TouchableOpacity>
        </>


    )
}

export default ChatBody