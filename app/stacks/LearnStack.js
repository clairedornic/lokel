import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LearnScreen from '../screens/LearnScreen';
import LessonScreen from '../screens/LessonScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import EndLessonScreen from '../screens/EndLessonScreen';

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
			<Stack.Screen 
				name="ExercisesScreen" 
				component={ExercisesScreen} 
				options={{ headerShown: false }}
			/>
			<Stack.Screen 
				name="EndLessonScreen" 
				component={EndLessonScreen} 
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