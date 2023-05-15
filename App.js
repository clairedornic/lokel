import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LearnStack from './app/stacks/Learn.Stack';
import ProfilStack from './app/stacks/ProfilStack';
import TranslateStack from './app/stacks/TranslateStack';
import  NavIcons from './app/components/NavIcons'

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							return <NavIcons color={color} iconName={route.name}></NavIcons>;
						},
						tabBarActiveTintColor: 'black',
						tabBarInactiveTintColor: 'black',
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

export default App;