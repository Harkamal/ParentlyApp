import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import TipsScreen from './src/screens/TipsScreen';
import Loader from './src/components/Loader';

const Tab = createBottomTabNavigator();

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Remove the timer logic, you can now control this based on app initialization
    const timer = setTimeout(() => {
      setLoading(false); // Remove loading based on real conditions in the app
    }, 2000); // Example short wait time for testing

    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
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
            tabBarActiveTintColor: '#FF6F00', // Orange Color
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Tips" component={TipsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7B549', // Global background color
  },
});

export default App;
