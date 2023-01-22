import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { PageTitle } from "../../utils/custom/PageTitle";

export const SettingsScreen = () => {
  return (
    <ParentView>
      <PageTitle text="Settings" />
    </ParentView>
  );
};

const ParentView = styled.View`
  flex: 1;
  background-color: black;
`;
