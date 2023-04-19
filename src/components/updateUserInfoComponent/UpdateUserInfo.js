import React, { useCallback, useEffect, useReducer, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import { Input } from "../../../utils/custom/Input";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  signUp,
  updateSignedInUserData,
} from "../../../utils/actions/authAction";
import { formReducer } from "../../../utils/reducers/formReducer";
import { SubmitButton } from "../../../utils/custom/SubmitButton";
import { ParentView } from "../../screens/SettingsScreen";
import { formActions } from "../../../utils/actions/formActions";
import { colors } from "../../../theme/colors";
import { updateLoggedInUserData } from "../../../store/authSlice";

export const UpdateUserInfo = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.userData);

  const initialState = {
    inputValues: {
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      email: userData.email || "",
      about: userData.about || "",
    },

    inputValidities: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      about: undefined,
    },
    formIsValid: false,
  };
  // console.log(initialState);

  // console.log(userData, "from here");

  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const inputChangedHandler = useCallback((inputId, inputValue) => {
    const result = formActions(inputId, inputValue);
    dispatchFormState({ inputId, validationResult: result, inputValue });
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred", error);
    }
  }, [error]);

  const authHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const action = signUp(
        formState.inputValues.firstName,
        formState.inputValues.lastName,
        formState.inputValues.email,
        formState.inputValues.password
      );
      setError(null);
      await dispatch(action);
    } catch (error) {
      setError(error.message);

      setIsLoading(false);
      // console.log(error.message);
    }
  }, [dispatch, formState]);

  const saveHandler = () => {
    const updatedVals = formState.inputValues;
    try {
      setIsLoading(true);
      updateSignedInUserData(userData.userId, updatedVals);
      dispatch(updateLoggedInUserData({ newData: updatedVals }));
      setIsLoading(false);
    } catch (error) {}
    console.log(updatedVals);
  };

  return (
    <ParentView>
      <Input
        id="firstName"
        label="First Name"
        iconPack={FontAwesome}
        icon="user-o"
        iconColor="white"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["firstName"]}
        initialValue={userData.firstName}
      />
      <Input
        id="lastName"
        label="Last Name"
        iconPack={FontAwesome}
        icon="user-o"
        iconColor="white"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["lastName"]}
        initialValue={userData.lastName}
      />
      <Input
        id="email"
        label="Email"
        iconPack={Feather}
        keyboardType="email-address"
        icon="mail"
        autoCapitalize="none"
        iconColor="white"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["email"]}
        initialValue={userData.email}
      />
      <Input
        id="about"
        label="About"
        iconPack={FontAwesome}
        icon="user-o"
        iconColor="white"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["about"]}
        initialValue={userData.about}
      />
      {isLoading ? (
        <ActivityIndicator size={"small"} color={colors.ui.selected} />
      ) : (
        <SubmitButton
          text="Update Info"
          style={{ margin: 10 }}
          onPress={saveHandler}
          disabled={!formState.formIsValid}
        />
      )}
    </ParentView>
  );
};
