import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 bg-black justify-center items-center">
      {/* Image */}
      <Image
        source={{
          uri: "https://images.pexels.com/photos/175708/pexels-photo-175708.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
        className="h-36 w-36 mb-6"
        resizeMode="contain"
      />

      <Text className="text-white text-3xl font-bold mb-8">FitZone</Text>

      <View className="w-80 space-y-4">
        <TextInput
          className="bg-gray-800 text-white py-3 px-4 rounded-lg mb-6"
          placeholder="Enter Name"
          placeholderTextColor="#A3A3A3"
          value={name}
          onChangeText={setName}
        />

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

      <TouchableOpacity className="bg-blue-500 w-80 py-3 rounded-lg mt-6">
        <Text className="text-white text-center font-semibold text-lg">
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
