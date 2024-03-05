import { Animated, Dimensions, StyleSheet, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Colors, Fonts } from '../tokens';
import { ErrorNotificationProps } from './ErrorNotification.props';

const width = Dimensions.get('window').width;
export const ErrorNotification = ({ error }: ErrorNotificationProps) => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const animatedValue = new Animated.Value(-100);

	const onEnter = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		if (!error) {
			return;
		}
		setIsShown(true);
		const timerId = setTimeout(() => {
			setIsShown(false);
		}, 3000);
		return () => {
			clearTimeout(timerId);
		};
	}, [error]);

	if (!isShown) {
		return <></>;
	}

	return (
		<Animated.View
			style={{
				...styles.error,
				transform: [
					{
						translateY: animatedValue,
					},
				],
			}}
			onLayout={onEnter}
		>
			<Text style={styles.errorText}>{error}</Text>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		top: 50,
		width: width,
		height: 50,
		backgroundColor: Colors.red,
		padding: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	errorText: {
		color: Colors.white,
		fontSize: Fonts.f16,
		fontWeight: '400',
	},
});
