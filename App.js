import { useCallback, useState } from 'react';
import { StyleSheet, Text, LogBox } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider as PaperProvider } from 'react-native-paper';

import { LogInContext } from './app/contexts/LogInContext';

import LearnStack from './app/stacks/LearnStack';
import ProfilStack from './app/stacks/ProfilStack';
import HomeScreen from './app/screens/HomeScreen';
import AuthStack from './app/stacks/AuthStack';
import NavIcons from './app/components/nav/NavIcons';
import theme from './theme-design';

SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

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

const App = () => {

	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [currentLessonUser, setCurrentLessonUser] = useState();
	const [currentStateLessonUser, setCurrentStateLessonUser] = useState();
	const [isLoaded] = useFonts(customFonts);
	
	if (!isLoaded) {
		return null;
	}

	SplashScreen.hideAsync();

	return (
		<PaperProvider>
			<NavigationContainer style={styles.nav}>
				<LogInContext.Provider
					value={{ setIsUserLoggedIn, setCurrentLessonUser, currentLessonUser, setCurrentStateLessonUser, currentStateLessonUser}}
				>
					{isUserLoggedIn ? (
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
								initialRouteName="Traduire"
								>
									<Tab.Screen name="Apprendre" component={LearnStack} options={{ headerShown: false }} />
									<Tab.Screen name="Traduire" component={HomeScreen} options={{ headerShown: false }} />
									<Tab.Screen name="Profil" component={ProfilStack} options={{ headerShown: false }}/>
								</Tab.Navigator>
					) : (
						<AuthStack/>
					)}
				</LogInContext.Provider>
			</NavigationContainer>
			<StatusBar style="auto" />
		</PaperProvider>
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