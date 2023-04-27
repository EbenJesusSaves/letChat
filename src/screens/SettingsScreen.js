import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useEffect } from "react";
import { Button, ScrollView, Text } from "react-native";
import styled from "styled-components";
import { logout } from "../../store/authSlice";
import { userLogout } from "../../utils/actions/authAction";
import { PageTitle } from "../../utils/custom/PageTitle";
import { UpdateUserInfo } from "../components/updateUserInfoComponent/UpdateUserInfo";
import { useDispatch } from "react-redux";
import { ProfileImage } from "../components/profile/ProfileImage";

export const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <ParentView>
      <PageTitle text="Settings" />
      <ScrollView>
        <CenteredScrollView>
          <Button
            title="Update User Settings "
            onPress={() => navigation.navigate("UpdateUserInfo")}
          />
          <Button title="Log Out " onPress={() => dispatch(userLogout())} />
        </CenteredScrollView>
      </ScrollView>
    </ParentView>
  );
};

export const ParentView = styled.View`
  flex: 1;
  background-color: black;
`;

export const CenteredScrollView = styled.View`
  align-items: center;
`;
