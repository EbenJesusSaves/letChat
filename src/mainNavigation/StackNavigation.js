import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatScreen } from "../screens/ChatScreen";
import { MainScreen } from "../screens/MainScreen";
import { TabsNavigations } from "./TabsNavigations";

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: "",
        headerStyle: { backgroundColor: "#1c1d1f" },

        cardStyle: { backgroundColor: "#1c1d1f" },
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabsNavigations}
        options={{ gestureEnabled: true, headerShown: false }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ gestureEnabled: true }}
      />
    </Stack.Navigator>
  );
};
