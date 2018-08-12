import { ADD_SHOW } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case ADD_SHOW:
    default:
      return state;
  }
}