import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import {
  signUpWithEmailPassword,
  loginWithEmailPassword,
} from "../../../auth/auth-service";
import { SignUpData, LoginData } from "../../../types/user-types";

// todo : update the error messages later
export function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const handleSubmit = async () => {
    if (!email || !password || (isSignUp && !name)) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      const userData: SignUpData | LoginData = {
        email,
        password,
        ...(isSignUp && { name }),
      };

      if (isSignUp) {
        await signUpWithEmailPassword(userData as SignUpData);
        Alert.alert("Success", `Welcome, ${name}!`);
      } else {
        await loginWithEmailPassword(userData as LoginData);
        Alert.alert("Success", `Welcome back!`);
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Text className="text-white text-3xl font-bold mb-8">FitZone</Text>

      <View className="w-80 space-y-4">
        {isSignUp && (
          <TextInput
            className="bg-gray-800 text-white py-3 px-4 rounded-lg mb-6"
            placeholder="Enter Name"
            placeholderTextColor="#A3A3A3"
            value={name}
            onChangeText={setName}
          />
        )}

        <TextInput
          className="bg-gray-800 text-white py-3 px-4 rounded-lg mb-6"
          placeholder="Enter Email"
          placeholderTextColor="#A3A3A3"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="bg-gray-800 text-white py-3 px-4 rounded-lg mb-6"
          placeholder="Enter Password"
          placeholderTextColor="#A3A3A3"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        className="bg-blue-500 w-80 py-3 rounded-lg mt-6"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center font-semibold text-lg">
          {isSignUp ? "Sign Up" : "Log In"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4" onPress={() => setIsSignUp(!isSignUp)}>
        <Text className="text-white text-center">
          {isSignUp
            ? "Already have an account? Log In"
            : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
