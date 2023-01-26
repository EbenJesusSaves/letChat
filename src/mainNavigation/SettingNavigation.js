import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { UpdateUserInfo } from "../components/updateUserInfoComponent/UpdateUserInfo";
import { SettingsScreen } from "../screens/SettingsScreen";

const UpdateUserinfoStack = createStackNavigator();
export const SettingNavigation = () => {
  return (
    <UpdateUserinfoStack.Navigator
      screenOptions={{
        headerShadowVisible: false,

        headerShown: false,
      }}
    >
      <UpdateUserinfoStack.Screen name="settings" component={SettingsScreen} />
      <UpdateUserinfoStack.Screen
        name="UpdateUserInfo"
        component={UpdateUserInfo}
      />
    </UpdateUserinfoStack.Navigator>
  );
};
