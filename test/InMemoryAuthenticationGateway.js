/**
 * Uses something like LDAP to determine if the given credentials are valid
 */
export default class InMemoryAuthenticationGateway {
  credentialsAreValid(userName, password) {
    return userName === 'iker' && password === '1234'
  }
}
