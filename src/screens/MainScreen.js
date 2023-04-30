import React, { useEffect } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { CustomHeaderBtn } from "../components/CustomHeaderBtn";
import { Ionicons } from "@expo/vector-icons";

export const MainScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      // in your app, you can extract the arrow function into a separate component
      // to avoid creating a new one every time you update the options
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="search"
            iconName="ios-search"
            onPress={() => alert("search")}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>MainScreen</Text>
          <Button
            title="ChatSceen"
            onPress={() => navigation.navigate("ChatScreen")}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
