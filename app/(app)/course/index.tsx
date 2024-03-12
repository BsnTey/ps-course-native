import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../shared/tokens';
import { useAtom } from 'jotai/react/useAtom';
import { profileAtom } from '../../../entittes/user/model/user.state';

export default function MyCoursePage() {
	const [profile] = useAtom(profileAtom);
	return (
		<View>
			<Text style={styles.text}>{profile.profile?.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: Colors.white,
	},
});
