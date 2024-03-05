import { Image, StyleSheet, Text, View } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import { CustomButton } from '../shared/Button/Button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';
import {Link} from "expo-router";

export default function Login() {
	const [error, setError] = useState<string | undefined>();

	const alert = () => {
		setError('Не верный логин или пароль');
		setTimeout(() => {
			setError(undefined);
		}, 4000);
	};

	return (
		<View style={styles.container}>
			{error && <ErrorNotification error={error} />}
			<View style={styles.content}>
				<Image source={require('../assets/Logo.png')} style={styles.logo} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="Email"></Input>
					<Input isPassword placeholder="Пароль"></Input>
					<CustomButton text="Войти" onPress={alert} />
				</View>
				<Link href={'/restore'}><Text>Восстановить пароль</Text></Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		padding: 55,
		backgroundColor: Colors.black,
	},
	content: {
		alignItems: 'center',
		gap: 50,
	},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},
	logo: {
		width: 220,
	},
});
