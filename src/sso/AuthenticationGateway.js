/**
 * Uses something like LDAP to determine if the given credentials are valid
 */
export default class AuthenticationGateway {
  credentialsAreValid(userName, password) {
    throw Error(
      `Servidor externo de LDAP no invocable directamente (${userName}, ${password})`
    )
  }
}
