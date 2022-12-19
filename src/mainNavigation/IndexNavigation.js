import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackNavigation } from "./StackNavigation";

export const IndexNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
