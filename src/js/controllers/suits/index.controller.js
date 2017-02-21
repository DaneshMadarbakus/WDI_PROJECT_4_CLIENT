angular
  .module('rent-a-suit')
  .controller('SuitsIndexCtrl', SuitsIndexCtrl);

SuitsIndexCtrl.$inject = ['Suit'];
function SuitsIndexCtrl(){

  console.log('hi');

}
