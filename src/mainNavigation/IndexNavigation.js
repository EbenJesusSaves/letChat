import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RegistrationScreen } from "../screens/RegistrationScreen";
import { StackNavigation } from "./StackNavigation";
import { TabsNavigations } from "./TabsNavigations";

export const IndexNavigation = () => {
  const isAuth = false;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuth ? <StackNavigation /> : <RegistrationScreen />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
