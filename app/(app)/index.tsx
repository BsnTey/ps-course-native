import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../shared/tokens';

export default function MyCoursePage() {
	return (
		<View>
			<Text style={styles.text}>MyCoursePage</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: Colors.white,
	},
});
