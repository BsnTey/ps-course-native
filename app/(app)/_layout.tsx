import { useAtomValue } from 'jotai/index';
import { authAtom } from '../../entittes/auth/model/auth.state';
import { Redirect, Stack } from 'expo-router';

export default function AppLayout() {
	const { access_token } = useAtomValue(authAtom);

	if (!access_token) {
		return <Redirect href={'/'} />;
	}

	return (
		<Stack>
			<Stack.Screen name="course/index" />
		</Stack>
	);
}
