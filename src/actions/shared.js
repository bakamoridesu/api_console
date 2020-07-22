import { set_session } from "./session";
import {_SESSION} from "../utils/api";

export function handleInitialData(session) {
  return (dispatch) => {
    dispatch (set_session(session))
  }
}