import MyService from '../src/myservice/MyService'
import Request from '../src/sso/Request'
import SSOToken from '../src/sso/SSOToken'
import RegistryFake from './RegistryFake'
import InMemoryAuthenticationGateway from './InMemoryAuthenticationGateway'

describe('MyService', () => {
  let registry
  let service

  beforeEach(() => {
    let authenticationGateway = new InMemoryAuthenticationGateway()
    registry = new RegistryFake(authenticationGateway)
    service = new MyService(registry)
  })
  it('rejects invalid sso token', () => {
    const response = service.handleRequest(new Request('Foo', new SSOToken(5)))

    expect(response.getText()).toBe('Error')
  })

  it('accepts valid sso token', () => {
    const response = service.handleRequest(new Request('Foo', new SSOToken(1)))

    expect(response.getText()).toBe('hello Foo!')
  })

  it('contains correct name when valid response ', () => {
    const response = service.handleRequest(new Request('Foo', new SSOToken(1)))

    expect(response.getText()).toBe('hello Foo!')
  })

  it('registers a new user', () => {
    let expectedToken = new SSOToken(2);

    const response = service.registerUser('iker', '1234');

    expect(response).toEqual(expectedToken)
  })

  it('launches error if incorrect new session credentials', () => {
    const response = service.registerUser('pablo', '1234');

    expect(response.getText()).toBe('Error')
  })

  it('unregisters a user', () => {
    const response = service.unregisterUser(new SSOToken(1));

    expect(response.getText()).toBe('Unregistered correctly')
  })

  it('launches error if trying to unregister a not valid session', () => {
    const response = service.unregisterUser(new SSOToken(3));

    expect(response.getText()).toBe('Error')
  })
})
