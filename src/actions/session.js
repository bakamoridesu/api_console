export const SET_SESSION = 'SET_SESSION'

export function set_session(session) {
  return {
    type: SET_SESSION,
    session,
  }
}

