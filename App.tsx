import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "@/navigation/StackNavigation";

import { useFonts } from "expo-font";

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/font/Poppins-Regular.ttf"),
    BebasNeue: require("./assets/font/BebasNeue-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
}
