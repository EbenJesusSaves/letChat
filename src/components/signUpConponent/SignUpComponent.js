import React, { useCallback, useReducer } from "react";

import { FontAwesome, Feather } from "@expo/vector-icons";

import { SubmitButton } from "../../../utils/custom/SubmitButton";
import { Input } from "../../../utils/custom/Input";

import { formActions } from "../../../utils/actions/formActions";
import { formReducer } from "../../../utils/reducers/formReducer";

//this is the initial object for the state

const initialState = {
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
};

export const SignUpComponent = (props) => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const inputChangedHandler = useCallback((inputId, inputValue) => {
    const result = formActions(inputId, inputValue);
    dispatchFormState({ inputId, validationResult: result });
  });

  return (
    <>
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
        id="password"
        label="Password"
        iconPack={Feather}
        autoCapitalize="none"
        secureTextEntry
        icon="lock"
        iconColor="white"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["password"]}
      />
      <SubmitButton
        text="Sign Up"
        style={{ margin: 10 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};
