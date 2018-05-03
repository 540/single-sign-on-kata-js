import Response from '../sso/Response'

export default class MyService {
  constructor(registry) {
    this.registry = registry
  }

  handleRequest(request) {
    if (this.registry.isValid(request.getSSOToken())) {
      return new Response(`hello ${request.getName()}!`)
    }

    return new Response('Error')
  }

  registerUser(userName, userSession) {
    let sessionResponse = this.registry.registerNewSession(
      userName,
      userSession
    )
    if (sessionResponse !== null) {
      return sessionResponse
    }

    return new Response('Error')
  }

  unregisterUser(token) {
    let sessionResponse = this.registry.unregister(token)
    if (sessionResponse !== null) {
      return new Response('Unregistered correctly')
    }

    return new Response('Error')
  }
}
