import React from "react";
import {
  ValidateLength,
  Validation,
  ValidationEmail,
  ValidationPassword,
} from "../validation/Validation";

export const formActions = (inputId, inputValue) => {
  if (inputId === "firstName" || inputId === "lastName") {
    return Validation(inputId, inputValue);
  } else if (inputId === "email") {
    return ValidationEmail(inputId, inputValue);
  } else if (inputId === "password") {
    return ValidationPassword(inputId, inputValue);
  } else if (inputId === "about") {
    return ValidateLength(inputId, inputValue, 0, 200, true);
  }
};
