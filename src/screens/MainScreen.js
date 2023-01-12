import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const MainScreen = ({ navigation }) => {
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
