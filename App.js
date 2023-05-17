import { useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LearnStack from './app/stacks/Learn.Stack';
import ProfilStack from './app/stacks/ProfilStack';
import TranslateStack from './app/stacks/TranslateStack';
import NavIcons from './app/components/NavIcons/NavIcons';
import theme from './theme-design';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
	'Poppins-Light': require('./app/assets/fonts/Poppins-Light.ttf'),
	'Poppins': require('./app/assets/fonts/Poppins-Regular.ttf'),
	'Poppins-Medium': require('./app/assets/fonts/Poppins-Medium.ttf'),
	'Poppins-SemiBold': require('./app/assets/fonts/Poppins-SemiBold.ttf'),
	'Poppins-Bold': require('./app/assets/fonts/Poppins-Bold.ttf'),
	'Husansans-Light': require('./app/assets/fonts/Husansans-Light.ttf'),
	'Husansans-Regular': require('./app/assets/fonts/Husansans-Regular.ttf'),
	'Husansans-Medium': require('./app/assets/fonts/Husansans-Medium.ttf'),
	'Husansans-Bold': require('./app/assets/fonts/Husansans-Bold.ttf'),
};

const Tab = createBottomTabNavigator();

const App = () => {

	const [isLoaded] = useFonts(customFonts);
	if (!isLoaded) {
		return null;
	}
	SplashScreen.hideAsync();

	return (
		<>
			<NavigationContainer style={styles.nav}>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarStyle: { height: 70, borderTopColor: '#DEDEDE', borderTopWidth: 1, elevation: 0 },
						tabBarItemStyle: { paddingTop: 4 },
						tabBarIcon: ({ focused }) => {
							return <NavIcons color={theme.colors.violet} iconName={route.name} focused={focused}></NavIcons>;
						},
						tabBarLabel: ({ tintColor, focused }) =>
						focused ? (<Text style={{ color: theme.colors.violet, fontSize: 16, borderBottomWidth: 3, borderBottomColor: theme.colors.violet, paddingBottom: 0, paddingTop: 2, fontFamily: 'Poppins-Bold' }} >{route.name}</Text>) : (<Text style={{ color: theme.colors.violet, fontSize: 16, borderBottomWidth: 3, borderBottomColor: theme.colors.transparent, paddingBottom: 0, paddingTop: 2, fontFamily: 'Poppins' }} >{route.name}</Text>),
					})}
				>
					<Tab.Screen name="Apprendre" component={LearnStack} options={{ headerShown: false }} />
					<Tab.Screen name="Traduire" component={TranslateStack} options={{ headerShown: false }} />
					<Tab.Screen name="Profil" component={ProfilStack} options={{ headerShown: false }} />
				</Tab.Navigator>
			</NavigationContainer>
			<StatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	tabBarLabel: {
	  fontWeight: 'bold',
	},
	nav: {
		paddingVertical: theme.spacing.small,
	}
});

export default App;