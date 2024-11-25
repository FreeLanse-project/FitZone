import { Button, View } from "react-native";
import "./global.css";
import { WelcomePage } from "./app/screen/welcome";
import { SignUp } from "./app/screen/sign-up";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types/navigationTypes"; // Import the type

const Stack = createNativeStackNavigator<RootStackParamList>(); // Apply the type here

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="WelcomePage"
      >
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
