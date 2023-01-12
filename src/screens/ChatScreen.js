import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import bgImage from "../../assets/images/2224368.webp";
import { colors } from "../../theme/colors";

export const ChatScreen = () => {
  ///////states///////////////////////////
  const [messageText, SetMessageText] = useState("");

  console.log(messageText);

  const IosKeyBoardBug = Platform.OS === "ios" ? "padding" : null;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={IosKeyBoardBug}
      keyboardVerticalOffset={100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ChatScreenView>
          <ImageBackground
            source={bgImage}
            style={{ flex: 1, position: "relative" }}
          ></ImageBackground>

          <ChartInputView>
            <MediaButtons>
              <Feather name="plus" size={24} color={colors.ui.tertiary} />
            </MediaButtons>
            <TextBox
              value={messageText}
              multiline
              
              onChangeText={(text) => SetMessageText(text)}
            />
            {!messageText.length ? (
              <MediaButtons>
                <Feather name="camera" size={24} color={colors.ui.tertiary} />
              </MediaButtons>
            ) : (
              <MediaButtonsSend>
                <Ionicons name="ios-send" size={18} color="white" />
              </MediaButtonsSend>
            )}
          </ChartInputView>
        </ChatScreenView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const ChartInputView = styled.View`
  flex-direction: row;
  padding-vertical: 8px;
  padding-horizontal: 10px;
  height: 50;
`;

const ChatScreenView = styled.SafeAreaView`
  flex: 1;
`;

const TextBox = styled.TextInput`
  flex: 1;
  border-width: 1px;
  border-radius: 50px;
  border-color: ${colors.ui.textBg};
  background-color: ${colors.ui.textBg};
  color: wheat;
  margin-horizontal: 15px;
  padding-horizontal: 12px;
`;

const MediaButtons = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${(p) => p.theme.space[5]};
`;

const MediaButtonsSend = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${(p) => p.theme.space[5]};
  height: ${(p) => p.theme.space[5]};
  background-color: ${colors.ui.tertiary};
  border-radius: 50px;
`;
