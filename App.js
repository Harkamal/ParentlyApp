import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';  // Import Stack Navigator
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import TipsScreen from './src/screens/TipsScreen';
import IntroScreen from './src/screens/IntroScreen';
import SplashScreen from 'react-native-splash-screen';
import { styles } from './src/styles/styles';

// Create the Stack Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define your Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Tips') {
            iconName = 'bulb';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: styles.tabActiveIcon.color,
        tabBarInactiveTintColor: styles.tabInactiveIcon.color,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tips" component={TipsScreen} />
    </Tab.Navigator>
  );
}

// Main App Component
function App() {
  useEffect(() => {
    // Hide splash screen after 1 second
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* Stack Navigator for handling first-time loading of IntroScreen */}
        <Stack.Navigator>
          {/* Load IntroScreen first */}
          <Stack.Screen
            name="Intro"
            component={IntroScreen}
            options={{ headerShown: false }}  // Hide header for IntroScreen
          />
          {/* Then navigate to the main Tab Navigator */}
          <Stack.Screen
            name="Main"
            component={MyTabs}
            options={{ headerShown: false }}  // Hide header for Tab Navigator
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
