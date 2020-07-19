export const SET_SESSION = 'SET_SESSION'
export const _SESSION = "session"
export const _ACCOUNT = "account"
export const _SUBLOGIN = "sublogin"

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

