import { StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LearnStack from './app/stacks/Learn.Stack';
import ProfilStack from './app/stacks/ProfilStack';
import TranslateStack from './app/stacks/TranslateStack';
import NavIcons from './app/components/NavIcons/NavIcons';
import theme from './theme-design';


const Tab = createBottomTabNavigator();

const App = () => {
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
						focused ? (<Text style={{ fontWeight: 'bold', color: theme.colors.violet, fontSize: 16, borderBottomWidth: 3, borderBottomColor: theme.colors.violet, paddingBottom: 7 }} >{route.name}</Text>) : (<Text style={{ fontWeight: 'normal', color: theme.colors.violet, fontSize: 16, borderBottomWidth: 3, borderBottomColor: theme.colors.transparent, paddingBottom: 7 }} >{route.name}</Text>),
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