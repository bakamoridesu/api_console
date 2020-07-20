import Sendsay from 'sendsay-api';
import {_AUTH, _SESSION} from "../actions/session";

let sendsay;

function initSendsay (auth) {
  sessionStorage.setItem(_AUTH, JSON.stringify(auth))
  return new Sendsay({
    auth,
  })
}

export async function handleAuth({login, sublogin = null, password}) {
  const auth = {
    login,
    sublogin,
    password,
  }
  sendsay = initSendsay(auth)
  return sendsay.request({action: 'sys.settings.get'})
}

export function handlePong() {
  if (!sendsay) {
    sendsay = initSendsay(JSON.parse(sessionStorage.getItem(_AUTH)))
  }
  return sendsay.request({action: 'pong'})
}