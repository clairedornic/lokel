import { StyleSheet, Text, View } from 'react-native';

const TranslateStack = () => {
	return (
		<View style={styles.container}>
			<Text>Translate Stack</Text>
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

export default TranslateStack;