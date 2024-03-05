import { TextInput, TextInputProps, StyleSheet, Pressable, View } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';
import { useState } from 'react';
import { EyeOpenIcon } from '../../assets/icons/eye';
import { EyeClosedIcon } from '../../assets/icons/eye-closed';

export const Input = ({ isPassword, ...props }: TextInputProps & { isPassword?: boolean }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	return (
		<View>
			<TextInput
				{...props}
				style={styles.input}
				placeholderTextColor={Colors.gray}
				secureTextEntry={isPassword && !isPasswordVisible}
			/>
			{isPassword && (
				<Pressable
					style={styles.eyeIcon}
					onPress={() => {
						setIsPasswordVisible(!isPasswordVisible);
					}}
				>
					{isPasswordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: Colors.violetDark,
		paddingHorizontal: 24,
		borderRadius: Radius.r10,
		fontSize: Fonts.f16,
		color: Colors.gray,
	},
	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
});