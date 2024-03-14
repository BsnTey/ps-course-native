import { Image, StyleSheet, View } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import { CustomButton } from '../shared/Button/Button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import CustomLink from '../shared/CustomLink/CustomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entittes/auth/model/auth.state';
import { router } from 'expo-router';

export default function Index() {
	const [localError, setLocalError] = useState<string | undefined>();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);

	const onSubmit = () => {
		if (!email) {
			setLocalError('Не введен Email');
			return;
		}
		if (!password) {
			setLocalError('Не введен Пароль');
			return;
		}
		login({ email, password });
	};

	useEffect(() => {
		if (access_token) {
			router.replace('course');
		}
	}, [access_token]);

	useEffect(() => {
		if (error) {
			setLocalError(error);
		}
	}, [error]);

	return (
		<View style={styles.container}>
			{localError && <ErrorNotification error={localError} />}
			<View style={styles.content}>
				<Image source={require('../assets/Logo.png')} style={styles.logo} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="Email" onChangeText={setEmail} />
					<Input isPassword placeholder="Пароль" onChangeText={setPassword} />
					<CustomButton text="Войти" onPress={onSubmit} />
				</View>
				<CustomLink href={'/course'} text={'Восстановить пароль'} />
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
