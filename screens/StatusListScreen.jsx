import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MyStatus from '../components/MyStatus'
import RecentStatus from '../components/RecentStatus'
import ViewedStatus from '../components/ViewedStatus'

const StatusListScreen = () => {
    return (
        <ScrollView className="bg-gray-900 h-full">
            <MyStatus />
            <RecentStatus />
            <ViewedStatus />
        </ScrollView>
    )
}

export default StatusListScreen