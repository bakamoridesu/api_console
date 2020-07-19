import Sendsay from 'sendsay-api';

const sendsay = new Sendsay();

export async function handleAuth({login, sublogin=null, password}) {
  await sendsay.login({
      login: login,
      sublogin: sublogin,
      password: password,
  })
  return sendsay.request({ action: 'sys.settings.get'})
}

export function handlePong() {
  return sendsay.request({action: 'pong'})
}