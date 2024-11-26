import { Button, View } from "react-native";
import "./global.css";
import { WelcomePage } from "./app/screen/welcome";
import { SignUp } from "./app/screen/sign-up";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types/navigationTypes";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "./app/screen/sign-in";
import Toast from "react-native-toast-message";
import { ForgotPassword } from "./app/screen/forget-password";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="WelcomePage"
      >
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
