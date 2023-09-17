import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import { Colors } from './theme/Colors';
import TopTabBar from './navigation/TopTabBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './screens/ChatScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false, }} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} options={{ headerShown: false, }} />
      </Stack.Navigator>
      {/* StatusBar-> it will change the color of status bar top of the display */}
      <StatusBar backgroundColor={Colors.primaryColor} />
    </NavigationContainer>
  )
}

export default App;