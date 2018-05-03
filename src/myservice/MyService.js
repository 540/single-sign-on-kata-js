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
}
