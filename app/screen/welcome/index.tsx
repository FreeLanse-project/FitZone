import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import CustomButton from "../../components/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types/navigationTypes";

export function WelcomePage() {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <SafeAreaView className="flex-1 bg-black items-center">
      <View className="flex-1 flex-col justify-evenly px-8">
        <View className="rounded-full overflow-hidden">
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            className="h-40 w-40"
          />
        </View>

        <View>
          <Text className="text-gray-400 text-3xl font-bold text-center">
            Welcome to FitZone &{"\n"}start your fitness
          </Text>
          <Text className="text-gray-400 text-center text-sm">
            Track workouts, set goals, discover exercises & reach new heights.
          </Text>
        </View>
        <View>
          <View className="flex-row gap-4 justify-between pb-4">
            <CustomButton
              text="Sign In"
              onPress={() => navigation.navigate("SignIn")}
              className="bg-white"
            />
            <CustomButton
              text="Join Now"
              className="bg-primary"
              classNameText="text-white"
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>

          <Text className="text-gray-400 text-center">Explore as a guest</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
