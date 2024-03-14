import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '../../../shared/tokens';
import CustomLink from '../../../shared/CustomLink/CustomLink';

export default function CoursePage() {
	const { alias } = useLocalSearchParams();

	return (
		<SafeAreaView>
			<View>
				<Text style={styles.text}>{alias}</Text>
			</View>
			<CustomLink href={'/'} text={'Главная'} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	text: {
		color: Colors.white,
	},
});
