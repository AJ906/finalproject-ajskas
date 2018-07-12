import auth0 from 'auth0-js';

import history from 'history';

export default class Auth {
  //enter credentials
  auth0 = new auth0.WebAuth({
    domain: 'our credentials',
    clientID:'',
    redirectUri:'',
    audience:'',
    responseType:'',
    scope:''
  });

  login = () => {
    this.auth).authorize();
  }

  // parses the result after authentication from URL hash
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken){
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  //Sets user details in localStorage
  setSession = (authResult) => {
    // Set the time that the access token will expire
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    //navigate to the home route
    history.replace('/home');
  }

  //removes user details from localStorage
  logout = () => {
    
  }


}