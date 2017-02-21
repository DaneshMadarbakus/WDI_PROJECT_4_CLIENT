angular
  .module('rent-a-suit')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams){
  const vm = this;
  User
    .get($stateParams)
    .$promise
    .then(response => {
      console.log(response);
      vm.user = response;
    });
}
