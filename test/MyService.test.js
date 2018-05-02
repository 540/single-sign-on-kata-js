import MyService from '../src/myservice/MyService'
import Request from '../src/sso/Request'

describe('MyService', () => {
  it('invalid sso token is rejected', () => {
    const service = new MyService(null)

    const response = service.handleRequest(new Request('Foo', null))

    expect(response.getText()).not.toEqual('hello Foo!')
  })
})
