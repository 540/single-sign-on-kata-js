import Response from '../sso/Response'

export default class MyService {
  constructor(registry) {
    this.registry = registry
  }

  handleRequest(request) {
    // TODO: check request has a valid SSOToken
    return new Response(`hello ${request.getName()}!`)
  }
}
