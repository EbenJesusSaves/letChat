import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useEffect } from "react";
import { Button, Text } from "react-native";
import styled from "styled-components";
import { PageTitle } from "../../utils/custom/PageTitle";
import { UpdateUserInfo } from "../components/updateUserInfoComponent/UpdateUserInfo";

export const SettingsScreen = ({ navigation }) => {
  return (
    <ParentView>
      <PageTitle text="Settings" />
      <Button
        title="Update User Settings "
        onPress={() => navigation.navigate("UpdateUserInfo")}
      />
    </ParentView>
  );
};

export const ParentView = styled.View`
  flex: 1;
  background-color: black;
`;
