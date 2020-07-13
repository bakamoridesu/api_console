import { _SESSION, set_session } from "./session";

export function handleInitialData(session) {
  return (dispatch) => {
    dispatch (set_session(session))
  }
}