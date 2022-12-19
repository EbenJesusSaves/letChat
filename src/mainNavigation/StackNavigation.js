import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};
