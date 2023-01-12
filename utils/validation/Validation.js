import React from "react";
import { validate } from "validate.js";

export const Validation = (inputId, inputValue) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (inputValue !== "") {
    constraints.format = {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain a-z",
    };
  }
  const validationResults = validate(
    { [inputId]: inputValue },
    { [inputId]: constraints }
  );
  return validationResults && validationResults[inputId];
};

export const ValidationEmail = (inputId, inputValue) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (inputValue !== "") {
    constraints.email = true;
  }
  const validationResults = validate(
    { [inputId]: inputValue },
    { [inputId]: constraints }
  );
  return validationResults && validationResults[inputId];
};

export const ValidationPassword = (inputId, inputValue) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (inputValue !== "") {
    constraints.length = {
      minimum: 6,
      message: "Must be at least 6 characters",
    };
  }
  const validationResults = validate(
    { [inputId]: inputValue },
    { [inputId]: constraints }
  );
  return validationResults && validationResults[inputId];
};
