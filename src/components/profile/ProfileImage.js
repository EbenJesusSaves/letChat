import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import defaultProfile from "../../../assets/images/userImage.jpeg";
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";
import {
  launchImagePicker,
  uploadImageAsync,
} from "../../utils/ImagePickerHelper";

export const ProfileImage = (props) => {
  const source = props.uri ? { uri: props.uri } : defaultProfile;

  const [userProfile, setUserProfile] = useState(source);
  const pickImage = async () => {
    try {
      const tempProfileUri = await launchImagePicker();
      if (!tempProfileUri) return;

      const uploadUri = await uploadImageAsync(tempProfileUri);

      setUserProfile({ uri: uploadUri });
    } catch (error) {}
  };

  return (
    <View>
      <TouchableOpacity onPress={pickImage}>
        <ProfilePic
          style={{ height: props.size, width: props.size }}
          source={userProfile}
        />
        <ChangeProfileIcon name="pencil" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const ProfilePic = styled.Image`
  border-radius: 50;
  border-color: ${(p) => p.theme.colors.ui.disabled};
  border-width: 1;
`;
const ChangeProfileIcon = styled(EvilIcons)`
  position: absolute;
  bottom: -2;
  right: 0;
`;
