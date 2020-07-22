export const CURRENT_REQUEST = 'CURRENT_REQUEST'
export const SET_CURRENT_REQUEST = 'SET_CURRENT_REQUEST'
export const SET_CURRENT_REQUEST_TEXT = 'SET_CURRENT_REQUEST'

export function setCurrentRequest(request) {
  return {
    type: SET_CURRENT_REQUEST,
    request,
  }
}

export function changeCurrentRequestText(text) {
  return {
    type: SET_CURRENT_REQUEST_TEXT,
    text,
  }
}

