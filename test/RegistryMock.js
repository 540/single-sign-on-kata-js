export default class RegistryMock {
  constructor() {
    this.validIds = [1, 2, 3];
    this.unregisterCalls = 0;
  }

  registerNewSession(userName, password) {
    throw Error(
      `Registro externo de single sign on no invocable directamente (${userName}, ${password})`
    )
  }

  isValid(token) {
    return this.validIds.indexOf(token.getId()) !== -1
  }

  unregister(token) {
    this.unregisterCalls ++;
  }

  getUnregisterCalls(){
    return this.unregisterCalls;
  }
}
