import Sendsay from 'sendsay-api';

export function handleAuth({login, sublogin=null, password}) {
  const sendsay = new Sendsay({
    auth: {
      login,
      sublogin,
      password,
    }
  });

  return sendsay.request({ action: 'sys.settings.get'})
}
