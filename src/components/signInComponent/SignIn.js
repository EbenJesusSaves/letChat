import React, { useCallback, useEffect, useReducer, useState } from "react";

import { Feather } from "@expo/vector-icons";

import { SubmitButton } from "../../../utils/custom/SubmitButton";
import { Input } from "../../../utils/custom/Input";

import { formActions } from "../../../utils/actions/formActions";
import { formReducer } from "../../../utils/reducers/formReducer";
import { async, result } from "validate.js";
import { signIn } from "../../../utils/actions/authAction";
import { ActivityIndicator, Alert } from "react-native";
import { colors } from "../../../theme/colors";
import { useDispatch } from "react-redux";

const initialState = {
  inputValues: {
    email: "",
    password: "",
  },
  inputValidities: { email: false, password: false },
  formIsValid: false,
};

export const SignInComponent = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred", error);
    }
  }, [error]);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = formActions(inputId, inputValue);
      dispatchFormState({ validationResult: result, inputId, inputValue });
    },
    [dispatchFormState]
  );

  const authHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const action = signIn(
        // formState.inputValues.firstName,
        // formState.inputValues.lastName,
        formState.inputValues.email,
        formState.inputValues.password
      );
      await dispatch(action);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, [dispatch, formState]);

  useEffect(() => {
    if (error) {
      Alert.alert("Och, Something Went Wrong", error);
    }
  }, [error]);

  return (
    <>
      <Input
        id="email"
        label="Email"
        iconPack={Feather}
        icon="mail"
        iconColor="white"
        keyboardType="email-address"
        errorText={formState.inputValidities["email"]}
        onInputChanged={inputChangedHandler}
      />
      <Input
        id="password"
        label="Password"
        iconPack={Feather}
        icon="lock"
        autoCapitalize="none"
        secureTextEntry
        iconColor="white"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["password"]}
      />
      {isLoading ? (
        <ActivityIndicator size={"small"} color={colors.ui.selected} />
      ) : (
        <SubmitButton
          text="SignIn"
          onPress={authHandler}
          style={{ margin: 10 }}
          disabled={!formState.formIsValid}
        />
      )}
    </>
  );
};
