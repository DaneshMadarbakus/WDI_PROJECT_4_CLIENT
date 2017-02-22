angular
  .module('rent-a-suit')
  .controller('UsersUpdateCtrl', UsersUpdateCtrl);

UsersUpdateCtrl.$inject = ['User', '$state', '$stateParams'];
function UsersUpdateCtrl(User, $state, $stateParams){
  const vm = this;
  User
    .get($stateParams)
    .$promise
    .then(response => {
      console.log(response);
      vm.user = response;
    });

  vm.edit = () => {
    User
      .update($stateParams, vm.user)
      .$promise
      .then(() => {
        $state.go('usersShow', $stateParams);
      });
  };
}
