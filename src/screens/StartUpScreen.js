import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useDispatch } from "react-redux";
import { authenticate, setDidTryAutoLogin } from "../../store/authSlice";
import { colors } from "../../theme/colors";
import { getUserData } from "../../utils/actions/userActions";

export const StartUpScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getSavedToStorage = async () => {
      const data = await AsyncStorage.getItem("userData");

      //   ;
      // console.log("Hi how are you doing ");
      if (!data) {
        dispatch(setDidTryAutoLogin());
        console.log("Hi how are you doing 1");
        return;
      }
      const pursedData = JSON.parse(data);
      const { token, expiryDate: expiryDateString, userId } = pursedData;

      const expiryDate = new Date(expiryDateString);

      if (expiryDate <= new Date() || !token || !userId) {
        dispatch(setDidTryAutoLogin());
        console.log("Hi how are you doing 1");
        return;
      }

      const userData = await getUserData(userId);
      dispatch(authenticate({ token, userData }));
    };
    getSavedToStorage();
  }, [dispatch]);

  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "black" }}
    >
      <ActivityIndicator size={"large"} color={colors.ui.selected} />
    </View>
  );
};
