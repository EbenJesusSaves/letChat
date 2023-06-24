import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import defaultProfile from "../../../assets/images/userImage.jpeg";
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";
import {
  launchImagePicker,
  uploadImageAsync,
} from "../../utils/ImagePickerHelper";
import { updateSignedInUserData } from "../../../utils/actions/authAction";
import { useDispatch } from "react-redux";
import { updateLoggedInUserData } from "../../../store/authSlice";

export const ProfileImage = (props) => {
  const dispatch = useDispatch();

  const source = props.uri ? { uri: props.uri } : defaultProfile;
  const userId = props.userId;

  const [userProfile, setUserProfile] = useState(source);
  const [isLoading, setIsLoading] = useState(false);
  
  const pickImage = async () => {
    try {
      const tempProfileUri = await launchImagePicker();
      if (!tempProfileUri) return;

      setIsLoading(true);
      const uploadUri = await uploadImageAsync(tempProfileUri);
      setIsLoading(false);

      const newData = { profilePicture: uploadUri };

      await updateSignedInUserData(userId, newData);
      dispatch(updateLoggedInUserData({ newData: newData }));

      setUserProfile({ uri: uploadUri });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={pickImage}>
        {isLoading ? (
          <View
            style={{
              height: 100,
              width: 100,
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size={"small"} />
          </View>
        ) : (
          <ProfilePic
            style={{ height: props.size, width: props.size }}
            source={userProfile}
          />
        )}

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
