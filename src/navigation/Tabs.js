import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import TipsScreen from '../screens/TipsScreen';
import { styles } from '../styles/styles';
import GuestUserQuestionScreen from '../screens/GuestUserQuestionScreen';
import QuestionsHistoryScreen from '../screens/QuestionsHistoryScreen';

// Create the Tab Navigator
const Tab = createBottomTabNavigator();

// Define your Tab Navigator
function Tabs() {
  const iconMap = {
    Guest: 'home',
    Home: 'home',
    Tips: 'bulb',
    History: 'bulb',
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const iconName = iconMap[route.name];
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: styles.tabActiveIcon.color,
        tabBarInactiveTintColor: styles.tabInactiveIcon.color,
      })}
    >
      <Tab.Screen name="Guest" component={GuestUserQuestionScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tips" component={TipsScreen} />
      <Tab.Screen name="History" component={QuestionsHistoryScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;
