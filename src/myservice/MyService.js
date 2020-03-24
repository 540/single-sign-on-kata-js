import Response from '../sso/Response'
import SSOToken from '../sso/SSOToken'

export default class MyService {
  constructor(registry) {
    this.registry = registry
  }

  handleRequest(request) {
    // TODO: check request has a valid SSOToken
    return new Response(`hello ${request.getName()}!`)
  }

  handleRegister(username, password) {
    // TODO: register and return token
    return
  }

  handleUnRegister(token) {
    // TODO: unregister token
    return
  }
}
