import "../global.css"
import {Button, StatusBar, Text, TouchableOpacity, View, Image, StyleSheet, ImageBackground} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import logo from '../assets/images/logo/zyra_logo.png';
import {Link} from "expo-router";

export default function App() {
    return (
        <SafeAreaView className="flex-1 items-center justify-end bg-gradient-to-br from-[#FAFAFA] to-[#EAF9F6] font-poppins-light text-black-100 pb-5">
            <StatusBar className="bg-white-100, text-black-100" />
            <View>
                <Text className="font-bubblegum text-7xl">
                    <Text className="color-yellow-100 text-8xl">Z</Text>yra
                </Text>
            </View>
            <View className="py-10">
                <Text className="font-poppins-medium text-xl text-black-100 text-center px-10">
                    Organize your wardrobe and create amazing outfits
                </Text>
                <Text className="font-poppins-light text-center text-lg pt-5">
                    Style made simple
                </Text>
            </View>
            <View className="flex flex-row gap-4 px-5">
                <Link href="/getting-started">
                    <TouchableOpacity className="flex-1 rounded-lg shadow-sm bg-yellow-100 py-5">
                        <Text
                            className="text-center font-poppins-medium text-black-100"
                            numberOfLines={1}
                            adjustsFontSizeToFit
                        >
                            Get started
                        </Text>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity className="flex-1 rounded-lg shadow-sm bg-white-100 py-5">
                    <Text className="text-center font-poppins-medium text-black-100">
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}