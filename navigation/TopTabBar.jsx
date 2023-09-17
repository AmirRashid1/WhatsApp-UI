import { View, Text } from 'react-native'
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityScreen from '../screens/CommunityScreen';
import ChatListScreen from '../screens/ChatListScreen';
import StatusListScreen from '../screens/StatusListScreen';
import CallListScreen from '../screens/CallListScreen';
import { Colors } from '../theme/Colors';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome5'
const Tab = createMaterialTopTabNavigator();
const TopTabBar = () => {
    return (
        //   <View>
        <Tab.Navigator
            initialRouteName='Chats' //when you open app it will show chats tab initially
            screenOptions={() => ({
                tabBarActiveTintColor: Colors.tertiary, //active tab bar will show that color
                tabBarInactiveTintColor: Colors.secondaryColor, //inactive or that is not selected tab bar will show that color
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.tertiary, //underline of the tab bar it changes color
                },
                tabBarStyle: {
                    backgroundColor: Colors.primaryColor, //it will change bg color of the tab bar
                    width: '100%',
                },
            })}>
            <Tab.Screen name="Community" component={CommunityScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: () => (
                    <FontAwesome name="users" size={19} color={Colors.tertiary} />
                ),

            }} />
            <Tab.Screen name="Chats" component={ChatListScreen} />
            <Tab.Screen name="Status" component={StatusListScreen} />
            <Tab.Screen name="Calls" component={CallListScreen} />
        </Tab.Navigator>
        //   </View>
    )
}

export default TopTabBar