import React, { useState } from "react";
import CustomButton from "../../components/button";
import CustomTextInput from "../../components/textInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image } from "react-native";
import Toast from "react-native-toast-message"; // Import toast
import { signUpWithEmailPassword } from "../../../auth/auth-service";

// todo: update the error messages later
export function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false); // To handle loading state

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Please fill in all fields.",
        visibilityTime: 3000,
      });
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await signUpWithEmailPassword({
        email,
        password,
        name,
      });
      console.log("User signed up:", userCredential);

      Toast.show({
        type: "success",
        position: "top",
        text1: "Success",
        text2: "Account created successfully!",
        visibilityTime: 3000,
      });
    } catch (error: any) {
      console.error("Sign up error:", error);

      Toast.show({
        type: "error",
        position: "top",
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

        <Text className="text-gray-400 text-3xl font-bold">FitZone</Text>

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
            secureTextEntry={true}
          />
        </View>

        <View className="flex-row">
          <CustomButton
            className="bg-primary"
            classNameText="text-white"
            text={isLoading ? "Signing Up..." : "Sign Up"}
            onPress={handleSignUp}
            disabled={isLoading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
