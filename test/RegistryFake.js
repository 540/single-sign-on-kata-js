import SSOToken from '../src/sso/SSOToken'

export default class RegistryFake {
  constructor(authenticationGateway) {
    this.authenticationGateway = authenticationGateway
    this.validTokens = [1]
  }

  registerNewSession(userName, password) {
    if (!this.areCredentialsValid(userName, password)) {
      return null
    }
    let ssoToken = new SSOToken(2)
    this.store(ssoToken)

    return ssoToken
  }

  isValid(token) {
    return this.validTokens.indexOf(token.getId()) !== -1
  }

  unregister(token) {
    let tokenPosition = this.validTokens.indexOf(token.getId());
    if(tokenPosition === -1){
      return null;
    }

    this.validTokens.splice(tokenPosition,1)

    return 'ok';
  }

  areCredentialsValid(userName, password) {
    return this.authenticationGateway.credentialsAreValid(userName, password)
  }

  store(ssoToken) {
    this.validTokens.push(ssoToken)
  }
}
