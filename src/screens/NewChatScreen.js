import React, { useEffect } from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { CustomHeaderBtn } from "../components/CustomHeaderBtn";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";

export const NewChatScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      // in your app, you can extract the arrow function into a separate component
      // to avoid creating a new one every time you update the options
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item title="" iconName="close" onPress={() => navigation.goBack()} />
        </HeaderButtons>
      ),
      headerTitle: "New Chat",
    });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <NewChatView>
          <AntDesign name="search1" size={20} color="white" />
          <SearchInput placeholder="Search" onChangeText={() => {}} />
        </NewChatView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const NewChatView = styled.View`
  flex-direction: row;
  background-color: ${(p) => p.theme.colors.ui.textBg};
  align-items: center;
  height: ${(p) => p.theme.sizes[4]};
  margin-vertical: ${(p) => p.theme.space[2]};
  margin-horizontal: ${(p) => p.theme.space[2]};
  padding-vertical: ${(p) => p.theme.space[1]};
  padding-horizontal: ${(p) => p.theme.space[3]};
  border-radius: 5;
`;

const SearchInput = styled.TextInput`
  margin-left: ${(p) => p.theme.space[2]};
  font-size: ${(p) => p.theme.fontSizes.body};
`;
