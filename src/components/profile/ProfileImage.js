import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import defaultProfile from "../../../assets/images/icons8-cat-65.png";
import styled from "styled-components";

export const ProfileImage = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <ProfilePic
          style={{ height: props.size, width: props.size }}
          source={defaultProfile}
        />
      </TouchableOpacity>
    </View>
  );
};

const ProfilePic = styled.Image`
  border-radius: 50;
  border-color: ${(p) => p.theme.colors.ui.disabled};
  border-width: 1;
`;
