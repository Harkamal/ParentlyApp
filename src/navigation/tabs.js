import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GuestUserQuestionScreen from '../screens/guestUserQuestionScreen';
import QuestionsHistoryScreen from '../screens/questionsHistoryScreen';
import {tabsNavigationStyles} from '../styles/tabsNavigationStyles';

// Create the Tab Navigator
const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

// Custom Tab Bar Component
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={tabsNavigationStyles.tabBarContainer}>
      {/* History Tab on the Left */}
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.navigate('History')}
        style={[
          tabsNavigationStyles.tab,
          state.index === 1 ? tabsNavigationStyles.tabActive : null, // Check if this is the active tab
        ]}
      >
        <Image
          source={require('../../assets/images/icHistory.png')}
          style={[
            tabsNavigationStyles.tabIcon,
            state.index === 1 ? tabsNavigationStyles.tabIconActive : null, // Active icon style
          ]}
          resizeMode="contain"
        />
        <Text
          style={[
            tabsNavigationStyles.tabLabel,
            state.index === 1 ? tabsNavigationStyles.tabLabelActive : null, // Active label style
          ]}
        >
          History
        </Text>
      </TouchableOpacity>

      {/* Center button */}
      <TouchableOpacity
        style={tabsNavigationStyles.centerCircle}
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('../../assets/images/icHome.png')} // The central icon
          style={tabsNavigationStyles.centerIcon}
        />
      </TouchableOpacity>

      {/* Settings Tab on the Right */}
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.navigate('History')}
        style={[
          tabsNavigationStyles.tab,
          state.index === 1 ? tabsNavigationStyles.tabActive : null, // Check if this is the active tab
        ]}
      >
        <Image
          source={require('../../assets/images/icSettings.png')}
          style={[
            tabsNavigationStyles.tabIcon,
            state.index === 1 ? tabsNavigationStyles.tabIconActive : null, // Active icon style
          ]}
          resizeMode="contain"
        />
        <Text
          style={[
            tabsNavigationStyles.tabLabel,
            state.index === 1 ? tabsNavigationStyles.tabLabelActive : null, // Active label style
          ]}
        >
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};
// Define your Tab Navigator
function Tabs() {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props}  />}>
      <Tab.Screen name="Home" component={GuestUserQuestionScreen} options={{ headerShown: false }} />
      <Tab.Screen name="History" component={QuestionsHistoryScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default Tabs;
