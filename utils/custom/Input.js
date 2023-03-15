import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import styled from "styled-components";

export const Input = (props) => {
  const [value, setValue] = useState(props.initialValue);
  console.log(value);

  const onChangeText = (text) => {
    setValue(text);
    props.onInputChanged(props.id, text);
  };

  return (
    <Container>
      <InputText>{props.label}</InputText>
      <InputContainer>
        {props.iconPack && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 20}
            color={props.iconColor}
            style={{ marginRight: 10 }}
          />
        )}
        <TypingSpace
          style={{ color: "white" }}
          {...props}
          onChangeText={onChangeText}
          value={value}
        />
      </InputContainer>
      {props.errorText && <ErrorText>{props.errorText}</ErrorText>}
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  padding-horizontal: 10px;
`;
const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${(p) => p.theme.colors.ui.textBg};
  padding-horizontal: ${(p) => p.theme.space[2]};
  padding-vertical: ${(p) => p.theme.space[3]};
  border-radius: 5px;
`;

const InputText = styled.Text`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.text.secondary};
  margin-bottom: ${(p) => p.theme.space[2]};
`;

const TypingSpace = styled.TextInput`
  flex: 1;
  padding-top: 0px;
  letter-spacing: 0.9px;
`;

const ErrorText = styled.Text`
  color: ${(p) => p.theme.colors.text.error};
  font-size: 12px;
`;
