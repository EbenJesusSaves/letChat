// this is the func that updates the reducer the action is the data passsed
// and the state is what updates the initial state
export const formReducer = (state, action) => {
  const { inputId, validationResult, inputValue } = action;

  //so this che
  const updatedValues = {
    ...state.inputValues,
    [inputId]: inputValue,
  };
  const updatedValidities = {
    ...state.inputValidities,
    [inputId]: validationResult,
  };

  let updatedFormIsValid = true;
  for (const key in updatedValidities) {
    if (updatedValidities[key] !== undefined) {
      updatedFormIsValid = false;
      break;
    }
  }

  return {
    inputValidities: updatedValidities,
    formIsValid: updatedFormIsValid,
    inputValues: updatedValues,
  };
};
