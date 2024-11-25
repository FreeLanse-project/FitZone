import React, { useState } from "react";
import CustomButton from "../../components/button";
import CustomTextInput from "../../components/textInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image } from "react-native";

// todo : update the error messages later
export function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  return (
    <SafeAreaView className="flex-1 bg-black items-center">
      <View className="flex-1 w-[100%] flex-col justify-evenly items-center px-8">
        <View>
          <Image
            source={require("../../../assets/signInUpImg.png")}
            className="w-64 h-64"
            resizeMode="contain"
          />
        </View>

        <Text className="text-gray-400 text-3xl font-bold ">FitZone</Text>

        <View className="gap-4 w-[100%]">
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
            onPress={() => setIsSignUp(!isSignUp)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
