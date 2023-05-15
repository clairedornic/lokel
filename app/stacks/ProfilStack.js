import { StyleSheet, Text, View } from 'react-native';

const ProfilStack = () => {
	return (
		<View style={styles.container}>
			<Text>Profil Stack</Text>
		</View>
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