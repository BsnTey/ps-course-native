import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '../../../shared/tokens';

export default function CoursePage() {
	const { alias } = useLocalSearchParams();

	return (
		<View>
			<Text style={styles.text}>{alias}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: Colors.white,
	},
});
