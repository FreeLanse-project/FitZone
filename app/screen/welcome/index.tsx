import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

export function WelcomePage({ navigation }: { navigation: any }) {
  return (
    <View className="flex-1 bg-black justify-center items-center">
      <View className="w-80">
        <View className="rounded-full overflow-hidden mb-6">
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            className="h-40 w-40"
          />
        </View>

        <Text className="text-white text-2xl font-bold text-center mb-4">
          Welcome to FitZone &{"\n"}start your fitness
        </Text>
        <Text className="text-gray-400 text-center text-sm mb-6">
          Track workouts, set goals, discover exercises & reach new heights.
        </Text>

        <View className="flex-row justify-between">
          <TouchableOpacity className="bg-white  rounded-full py-2 px-6">
            <Text className="text-black text-center  font-semibold">
              Sign in
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-blue-500 rounded-full py-3 px-6"
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text className="text-white text-center font-semibold">
              Join now
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-gray-400 text-center mt-4">
          Explore as a guest
        </Text>
      </View>
    </View>
  );
}
