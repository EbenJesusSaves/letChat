import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Alert, Text, View } from "react-native";
import { Input } from "../../../utils/custom/Input";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { signUp } from "../../../utils/actions/authAction";
import { formReducer } from "../../../utils/reducers/formReducer";
import { SubmitButton } from "../../../utils/custom/SubmitButton";
import { ParentView } from "../../screens/SettingsScreen";
import { formActions } from "../../../utils/actions/formActions";

const initialState = {
  inputValues: {
    firstName: "",
    lastName: "",
    email: "",
    about: "",
  },

  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
};

export const UpdateUserInfo = () => {
  const dispatch = useDispatch();

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
      />
      <Input
        id="lastName"
        label="Last Name"
        iconPack={FontAwesome}
        icon="user-o"
        iconColor="white"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["lastName"]}
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
      />
      <Input
        id="about"
        label="About"
        iconPack={FontAwesome}
        icon="user-o"
        iconColor="white"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["about"]}
      />
      {isLoading ? (
        <ActivityIndicator size={"small"} color={colors.ui.selected} />
      ) : (
        <SubmitButton
          text="Sign Up"
          style={{ margin: 10 }}
          onPress={authHandler}
          disabled={!formState.formIsValid}
        />
      )}
    </ParentView>
  );
};
