function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  $stateProvider.state('app.register', {
    url: '/register',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Sign up',  
  });

};

export default AuthConfig;
