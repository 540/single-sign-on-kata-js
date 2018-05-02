export default class SingleSignOnRegistry {
  registerNewSession(userName, password) {
    throw Error(
      `Registro externo de single sign on no invocable directamente (${userName}, ${password})`
    )
  }

  isValid(token) {
    throw Error(
      `Registro externo de single sign on no invocable directamente (${token})`
    )
  }

  unregister(token) {
    throw Error(
      `Registro externo de single sign on no invocable directamente (${token})`
    )
  }
}
