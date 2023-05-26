import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilScreen from '../screens/ProfilScreen';

const Stack = createStackNavigator();

const ProfilStack = () => {

	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="ProfilScreen" 
				component={ProfilScreen} 
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

export default ProfilStack;