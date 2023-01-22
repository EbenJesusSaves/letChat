import React from "react";
import { View } from "react-native";
import styled from "styled-components";

export const PageTitle = (props) => {
  return (
    <View style={{ marginBottom: 3 }}>
      <TileText>{props.text}</TileText>
    </View>
  );
};

const TileText = styled.Text`
  font-size: ${(p) => p.theme.fontSizes.h5};
  color: ${(p) => p.theme.colors.ui.selected};
  font-family: ${(p) => p.theme.fonts.boldHeader};
`;
