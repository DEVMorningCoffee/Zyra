import "../global.css"
import {SafeAreaView, StatusBar, Text, View} from "react-native";

export default function App() {
    return (
        <SafeAreaView className="flex-1">
            <StatusBar className="bg-white-100, text-black-100" />
            <View className="flex-1 items-center justify-center bg-white-100">
                <Text className="text-xl text-black-100 text-center font-poppins-light">
                    Welcome to Nativewind!
                </Text>
            </View>
        </SafeAreaView>

    );
}