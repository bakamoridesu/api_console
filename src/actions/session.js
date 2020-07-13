export const SET_SESSION = 'SET_SESSION'
export const _SESSION = "session"

export function set_session(session) {
  return {
    type: SET_SESSION,
    session,
  }
}

export function handleLogin(session) {
  return (dispatch) => {
    sessionStorage.setItem(_SESSION, session)
    dispatch (set_session(session))
  }
}

