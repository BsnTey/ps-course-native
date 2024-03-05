import {Text, View} from "react-native";
import {Link, Stack} from "expo-router";
import {Colors} from "../shared/tokens";

export default function Restore() {
    return (
        <View>
            <Stack.Screen options={{
                title: 'Восстановить пароль',
                statusBarColor: Colors.black
            }} />
            <Link href={"/"}><Text>reqwr</Text></Link>
        </View>
    );
};
