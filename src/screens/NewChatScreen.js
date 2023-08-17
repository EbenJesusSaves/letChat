import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
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
import { searchUser } from "../../utils/actions/userActions";
import { DataItem } from "../components/DataItem";

export const NewChatScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [onResult, setNoResult] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  useEffect(() => {
    const delayTime = setTimeout(async () => {
      if (!searchTerm || searchTerm === "") {
        setUser();
        setNoResult(false);
        return;
      }

      setIsLoading(true);

      const usersResult = await searchUser(searchTerm);
      setUser(usersResult);

      // console.log(Object.keys(usersResult));
      // if (Object.keys(usersResult).length === 0) {
      //   setNoResult(true);

      //   console.log("huiiiiiiii");
      // } else {
      //   setNoResult(false);
      // }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(delayTime);
  }, [searchTerm]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NewChatView>
          <AntDesign name="search1" size={20} color={colors.ui.textBg} />
          <SearchInput
            placeholder="Search"
            onChangeText={(t) => {
              setSearchTerm(t);
            }}
          />
        </NewChatView>
        {isLoading && (
          <GeneralCenter>
            <ActivityIndicator size="large" color={colors.ui.selected} />
          </GeneralCenter>
        )}

        {!isLoading && !onResult && user && (
          <FlatList
            data={Object.keys(user)}
            renderItem={(itemData) => {
              const userId = itemData.item;
              const userData = user[userId]
              return <DataItem title={`${userData.firstName} ${userData.lastName}`}
                subTitle={`${userData.About}`}
                image={userData.profilePicture} />
            }}
          />
        )}
        {!isLoading && !user && !searchTerm && (
          <GeneralCenter>
            <FontAwesome5 name="users" size={55} color={colors.text.disabled} />
            <TextClass> Enter a name to search for a user</TextClass>
          </GeneralCenter>
        )}
        {!isLoading && !onResult && searchTerm && (
          <GeneralCenter>
            <FontAwesome5
              name="question"
              size={55}
              color={colors.text.disabled}
            />
            <TextClass> No user found</TextClass>
          </GeneralCenter>
        )}
        {/* {!isLoading && user && (
          <GeneralCenter>
            <FontAwesome5 name="users" size={55} color={colors.text.disabled} />
            <TextClass> Enter a name to search for a user</TextClass>
          </GeneralCenter>
        )} */}
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
