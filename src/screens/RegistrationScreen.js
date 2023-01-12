import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

import { colors } from "../../theme/colors";
import { SignInComponent } from "../components/signInComponent/SignIn";

import { SignUpComponent } from "../components/signUpConponent/SignUpComponent";

export const RegistrationScreen = () => {
  const [signUp, setIsSignUp] = useState(false);

  const IosKeyBoardBug = Platform.OS === "ios" ? "height" : null;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: colors.brand.black,
      }}
    >
      <KeyboardAvoidingView
        behavior={IosKeyBoardBug}
        style={{ justifyContent: "center", flex: 1 }}
        keyboardVerticalOffset={100}
      >
        <TouchableWithoutFeedback>
          <ScrollView>
            <ImageContainer>
              <Image
                style={{ height: 200, width: 200 }}
                source={require("../../assets/images/logo.png")}
              />
            </ImageContainer>
            {signUp ? <SignUpComponent /> : <SignInComponent />}
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
              onPress={() => setIsSignUp((prevState) => !prevState)}
            >
              <Text style={{ color: colors.text.white }}>{`Switch to ${
                signUp ? "Sing In " : "Sign Up"
              }`}</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
