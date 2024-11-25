import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import CustomButton from "../../components/button";
import CustomTextInput from "../../components/textInput";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { loginWithEmailPassword } from "../../../auth/auth-service";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types/navigationTypes";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignIn = async () => {
    const navigation = useNavigation<RootStackParamList>();
    if (!email || !password) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error",
        text2: "Please fill in all fields.",
        visibilityTime: 3000,
      });
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await loginWithEmailPassword({ email, password });
      console.log("User signed in:", userCredential);

      Toast.show({
        type: "success",
        position: "bottom",
        text1: "Success",
        text2: "Welcome back!",
        visibilityTime: 3000,
      });
      navigation.navigate("Welcome");
    } catch (error: any) {
      console.error("Sign in error:", error);

      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error",
        text2: error.message || "Something went wrong.",
        visibilityTime: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            text="Email"
            placeholder="Enter Email"
            value={email}
            onChange={setEmail}
            className="h-14"
          />

          <CustomTextInput
            text="Password"
            placeholder="Enter Password"
            value={password}
            onChange={setPassword}
            className="h-14"
            secureTextEntry={true}
          />
          <Text className="text-gray-400 text-right">
            Forget your password?
          </Text>
        </View>

        <View className="flex-row">
          <CustomButton
            className="bg-primary"
            classNameText="text-white"
            text={isLoading ? "Signing In..." : "Sign In"}
            onPress={handleSignIn}
            disabled={isLoading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
