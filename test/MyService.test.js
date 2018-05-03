import MyService from '../src/myservice/MyService'
import Request from '../src/sso/Request'
import RegistryStub from './RegistryStub'

describe('MyService', () => {
  let registry

  beforeEach(() => {
    registry = new RegistryStub()
  })

  it('invalid sso token is rejected', () => {
    registry.setTokenValidity(false)
    const service = new MyService(registry)

    const response = service.handleRequest(new Request('Foo', null))

    expect(response.getText()).not.toBe('hello Foo!')
  })

  it('valid sso token is accepted', () => {
    registry.setTokenValidity(true)
    const service = new MyService(registry)

    const response = service.handleRequest(new Request('Foo', null))

    expect(response.getText()).toBe('hello Foo!')
  })
})
