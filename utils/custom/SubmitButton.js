import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { colors } from "../../theme/colors";

export const SubmitButton = (props) => {
  return (
    <ButtonContainer
      onPress={props.disabled ? () => {} : props.onPress}
      style={{
        backgroundColor: props.disabled
          ? colors.ui.disabled
          : colors.ui.tertiary,

        ...props.style,
      }}
    >
      <Text
        style={{
          color: props.disabled ? colors.text.disabled : colors.text.white,
          fontWeight: "700",
        }}
      >
        {props.text}
      </Text>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(p) => p.theme.colors.ui.tertiary};
  padding-vertical: ${(p) => p.theme.space[3]};
  padding-hozontal: ${(p) => p.theme.space[5]};
  border-radius: ${(p) => p.theme.space[2]};
  justify-content: center;
  align-items: center;
`;
