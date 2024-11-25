import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import CustomButton from "../../components/button";
import CustomTextInput from "../../components/textInput";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-black items-center">
      <View className="flex-1 flex-col justify-evenly items-center px-8">
        <View>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/175708/pexels-photo-175708.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            className="h-36 w-36"
            resizeMode="contain"
          />
        </View>

        <Text className="text-gray-400 text-3xl font-bold ">FitZone</Text>

        <View className="gap-4">
          <CustomTextInput
            text="Name"
            placeholder="Enter Name"
            value={name}
            onChange={setName}
          />

          <CustomTextInput
            text="Email"
            placeholder="Enter Email"
            value={email}
            onChange={setEmail}
          />

          <CustomTextInput
            text="Password"
            placeholder="Enter Password"
            value={password}
            onChange={setPassword}
          />
        </View>
        <View className="flex-row">
          <CustomButton
            className="bg-primary"
            classNameText="text-white"
            text="Sign in"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
