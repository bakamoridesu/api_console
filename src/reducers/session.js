import {SET_SESSION} from "../actions/session";

export function session(state = null, action) {
  switch (action.type) {
    case SET_SESSION:
      return action.session
    default:
      return state
  }
}