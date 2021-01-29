import { UPDATE_INPUT } from "../constants/inputTypes";

export const updateInput = (value) => ({
  type: UPDATE_INPUT,
  payload: value,
});
