import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AuthStack = ({handleUpdateLoggedInState}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{ headerShown: false }}
        initialParams={{ handleUpdateLoggedInState }}
      />
      <Stack.Screen 
        name="RegisterScreen" 
        component={RegisterScreen} 
        options={{ headerShown: false }} 
        initialParams={{ handleUpdateLoggedInState }}
      />
       <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default AuthStack;