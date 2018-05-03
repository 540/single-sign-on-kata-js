export default class RegistryStub {
  constructor() {
    this.validity = false
  }

  registerNewSession(userName, password) {
    throw Error(
      `Registro externo de single sign on no invocable directamente (${userName}, ${password})`
    )
  }

  isValid(token) {
    return token === token && this.validity
  }

  unregister(token) {
    throw Error(
      `Registro externo de single sign on no invocable directamente (${token})`
    )
  }

  setTokenValidity(validity) {
    this.validity = validity
  }
}
