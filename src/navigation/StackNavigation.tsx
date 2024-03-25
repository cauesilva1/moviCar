import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "../screens/Login";
import Register from "@/screens/register";

import colors from "@/constants/colors";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} 
      options={{
        headerTitle: '',
        headerTransparent: true,
      }}/>

<Stack.Screen name="Register" component={Register} 
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerShown: false
      }}/>


    </Stack.Navigator>

    
  );
}

export default StackNavigation;
