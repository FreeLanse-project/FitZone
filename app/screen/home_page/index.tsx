import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddWorkoutButton = () => (
  <TouchableOpacity
    className="items-center bg-gray-500 flex-1 gap-4 rounded-3xl py-12 px-4"
    onPress={() => {
      Toast.show({
        type: "success",
        text1: "Workout routine added!",
      });
    }}
  >
    <FontAwesome name="search" size={24} color="black" />
    <Text className="font-bold">Workout</Text>
  </TouchableOpacity>
);
export function Home() {
  const rows = [1, 2];
  return (
    <SafeAreaView className="flex-1 pt-4 px-6  bg-gray-900 ">
      <View>
        <View className="flex-row w-full justify-between items-center">
          <Text className="text-3xl font-extrabold text-gray-400">
            Welcome to FitZone!
          </Text>
          <FontAwesome name="search" size={24} color="white" />
          {/* <Text className="text-white">Hello</Text> */}
        </View>
        <Text className="text-gray-400 py-4">
          Get ready to crush your workout goals
        </Text>
      </View>
      <View className="pt-6 ">
        <View className="flex-row justify-between  bg-gray-500 p-4 py-6 rounded-3xl">
          <View className="w-[60%]">
            <Text className="font-bold text-xl pb-6 ">
              Boost your energy levels
            </Text>
            <TouchableOpacity className="items-center w-[40%] bg-white rounded-3xl  py-2 px-4">
              <Text className="">Start</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../assets/HomeImg.png")}
            className="w-32 h-32 rounded-3xl"
          />
        </View>
        <Text className="text-gray-400 py-8 font-bold">
          Explore workout routines
        </Text>
        <View className="flex-col gap-4 ">
          {rows.map((_, index) => (
            <View key={index} className="flex-row  gap-4">
              <AddWorkoutButton />
              <AddWorkoutButton />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
