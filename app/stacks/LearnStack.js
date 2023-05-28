import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LearnScreen from '../screens/LearnScreen';
import LessonScreen from '../screens/LessonScreen';

const Stack = createStackNavigator();

const LearnStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="LearnScreen" 
				component={LearnScreen} 
				options={{ headerShown: false }}
			/>
			<Stack.Screen 
				name="LessonScreen" 
				component={LessonScreen} 
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
});

export default LearnStack;