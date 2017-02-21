angular
  .module('rent-a-suit')
  .controller('SuitsNewCtrl', SuitsNewCtrl);

SuitsNewCtrl.$inject = ['Suit', '$state'];
function SuitsNewCtrl(Suit, $state){
  const vm = this;

  vm.create = () => {
    Suit
      .save(vm.suit)
      .$promise
      .then(() => {
        $state.go('suitsIndex');
      });
  };
}
