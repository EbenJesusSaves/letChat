import React, { useCallback, useReducer } from "react";

import { Feather } from "@expo/vector-icons";

import { SubmitButton } from "../../../utils/custom/SubmitButton";
import { Input } from "../../../utils/custom/Input";

import { formActions } from "../../../utils/actions/formActions";
import { formReducer } from "../../../utils/reducers/formReducer";
import { result } from "validate.js";

const initialState = {
  inputValidities: { email: false, password: false },
  formIsValid: false,
};

export const SignInComponent = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const inputChangedHandler = useCallback((inputId, inputValue) => {
    const result = formActions(inputId, inputValue);
    dispatchFormState({ validationResult: result, inputId });
  });

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
      <SubmitButton
        text="SignIn"
        style={{ margin: 10 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};
