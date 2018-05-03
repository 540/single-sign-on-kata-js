import MyService from '../src/myservice/MyService'
import Request from '../src/sso/Request'
import SSOToken from '../src/sso/SSOToken'
import RegistryMock from './RegistryMock'

describe('MyService', () => {
  let registry
  let service

  beforeEach(() => {
    registry = new RegistryMock()
    service = new MyService(registry)
  })
  it('invalid sso token is rejected', () => {
    const response = service.handleRequest(new Request('Foo', new SSOToken(5)))

    expect(response.getText()).not.toBe('hello Foo!')
  })

  it('valid sso token is accepted', () => {
    const response = service.handleRequest(new Request('Foo', new SSOToken(1)))

    expect(response.getText()).toBe('hello Foo!')
  })

  it('valid response contains correct name', () => {
    const response = service.handleRequest(new Request('Foo', new SSOToken(1)))

    expect(response.getText()).toBe('hello Foo!')
  })

  it('unregisters when invalid token', () => {
    service.handleRequest(new Request('Foo', new SSOToken(5)))

    expect(registry.getUnregisterCalls()).toBe(1)
  })
})
