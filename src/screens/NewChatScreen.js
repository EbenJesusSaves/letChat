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
import { useState } from "react";
import { colors } from "../../theme/colors";
import { FontAwesome5 } from "@expo/vector-icons";

export const NewChatScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [onResult, setNoResult] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
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
      <SafeAreaView style={{ flex: 1 }}>
        <NewChatView>
          <AntDesign name="search1" size={20} color={colors.ui.textBg} />
          <SearchInput placeholder="Search" onChangeText={() => {}} />
        </NewChatView>
        {!isLoading && !user && (
          <GeneralCenter>
            <FontAwesome5 name="users" size={55} color={colors.text.disabled} />
            <TextClass> Enter a name to search for a user</TextClass>
          </GeneralCenter>
        )}
        {!isLoading && onResult && (
          <GeneralCenter>
            <FontAwesome5
              name="question"
              size={55}
              color={colors.text.disabled}
            />
            <TextClass> No user found</TextClass>
          </GeneralCenter>
        )}
        {!isLoading && user && (
          <GeneralCenter>
            <FontAwesome5 name="users" size={55} color={colors.text.disabled} />
            <TextClass> Enter a name to search for a user</TextClass>
          </GeneralCenter>
        )}
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
  width: 100%;
`;

export const GeneralCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextClass = styled.Text`
  color: ${(p) => p.theme.colors.text.disabled};
`;
