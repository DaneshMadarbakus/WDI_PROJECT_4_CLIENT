angular
  .module('rent-a-suit')
  .controller('SuitsUpdateCtrl', SuitsUpdateCtrl);

SuitsUpdateCtrl.$inject = ['Suit', '$state', '$stateParams', 'CurrentUserService'];
function SuitsUpdateCtrl(Suit, $state, $stateParams, CurrentUserService){

  const vm = this;
  Suit
    .get($stateParams)
    .$promise
    .then(response => {
      console.log(response);
      vm.suit = response;
    });

  vm.edit = () => {
    Suit
      .update($stateParams, vm.suit)
      .$promise
      .then(() => {
        $state.go('usersShow', { id: CurrentUserService.currentUser.id});
      });
  };
}
