import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { SettingsScreen } from "../screens/SettingsScreen";
import { StackNavigation } from "./StackNavigation";
import { Text } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { SettingNavigation } from "./SettingNavigation";

const Tab = createBottomTabNavigator();

export const TabsNavigations = () => {
  const notification = () => {
    return <Text> 1</Text>;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "md-chatbubbles" : "md-chatbubbles-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#1651c2",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#1c1d1f",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarBadge: notification(),
          tabBarAllowFontScaling: true,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingNavigation}
        options={{ tabBarLabel: "Settings" }}
      />
    </Tab.Navigator>
  );
};
