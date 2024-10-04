import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';  // Import Stack Navigator
import SplashScreen from 'react-native-splash-screen';
import { styles } from './src/styles/styles';
import Tabs from './src/navigation/Tabs';
import IntroScreen from './src/screens/IntroScreen';

// Create the Stack Navigator
const Stack = createStackNavigator();

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
              component={Tabs}
              options={{ headerShown: false }}  // Hide header for Tab Navigator
            />
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
