angular
  .module('rent-a-suit')
  .controller('suitsShowCtrl', SuitsShowCtrl);

SuitsShowCtrl.$inject = ['Suit', '$stateParams'];
function SuitsShowCtrl(Suit, $stateParams){
  const vm = this;
  Suit
    .get($stateParams)
    .$promise
    .then(response => {
      console.log(response);
      vm.suit = response;
    });
}
