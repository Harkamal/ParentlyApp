import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import TipsScreen from '../screens/TipsScreen';
import { styles } from '../styles/styles';

// Create the Tab Navigator
const Tab = createBottomTabNavigator();

// Define your Tab Navigator
function Tabs() {
  const iconMap = {
    Home: 'home',
    Tips: 'bulb',
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = iconMap[route.name];
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

export default Tabs;
