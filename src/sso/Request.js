export default class Request {
  constructor(name, token) {
    this.name = name
    this.token = token
  }

  getSSOToken() {
    return this.token
  }

  getName() {
    return this.name
  }
}
