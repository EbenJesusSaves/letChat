import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";
import { store } from "../../store/store";
import { RegistrationScreen } from "../screens/RegistrationScreen";
import { StartUpScreen } from "../screens/StartUpScreen";
import { StackNavigation } from "./StackNavigation";
import { TabsNavigations } from "./TabsNavigations";

export const IndexNavigation = () => {
  const isValidUser = useSelector(
    (state) => state.auth.token !== null && state.auth.token !== ""
  );
  const didTryAgain = useSelector((state) => state.auth.didTryAutoLogin);
  const isAuth = isValidUser;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuth && <StackNavigation />}
        {!isAuth && didTryAgain && <RegistrationScreen />}
        {!isAuth && !didTryAgain && <StartUpScreen />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
