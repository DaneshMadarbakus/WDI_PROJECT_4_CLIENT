angular
  .module('rent-a-suit')
  .controller('SuitsIndexCtrl', SuitsIndexCtrl);

SuitsIndexCtrl.$inject = ['Suit'];
function SuitsIndexCtrl(Suit){
  const vm = this;
  vm.suits = Suit.query();
  console.log(vm.suits);
}
