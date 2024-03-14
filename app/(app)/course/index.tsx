import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../shared/tokens';
import CustomLink from '../../../shared/CustomLink/CustomLink';
import { useSetAtom } from 'jotai';
import { logoutAtom } from '../../../entittes/auth/model/auth.state';

export default function MyCoursePage() {
	const logout = useSetAtom(logoutAtom);

	return (
		<SafeAreaView>
			<View>
				<Text style={styles.text}>index</Text>
				<Button title="Выйти" onPress={logout} />
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
