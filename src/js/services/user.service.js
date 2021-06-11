export default class User {
  constructor(JWT, AppConstants, $http, $state, $q) {
    'ngInject';

    this._JWT = JWT;
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$state = $state;
    this._$q = $q;

    this.current = null;

  }

  attemptAuth(type, credentials) {}

  update(fields) {}

  logout() {}

  verifyAuth() {}

  ensureAuthIs(bool) {}
}
