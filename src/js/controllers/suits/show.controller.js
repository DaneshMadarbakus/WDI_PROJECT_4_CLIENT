angular
  .module('rent-a-suit')
  .controller('SuitsShowCtrl', SuitsShowCtrl);

SuitsShowCtrl.$inject = ['Suit', 'Request', 'Review', '$stateParams'];
function SuitsShowCtrl(Suit, Request, Review, $stateParams){
  const vm = this;
  console.log($stateParams.id);
  Suit
      .get($stateParams)
      .$promise
      .then(response => {
        console.log(response);
        vm.suit = response;
      });

  vm.requestcreate = () => {
    vm.request.suit_id = $stateParams.id;
    console.log(vm.request);
    Request
      .save(vm.request)
      .$promise
      .then((data) => {
        vm.suit.requests.push(data);
        vm.request = '';
      });
  };

  vm.reviewcreate = () => {
    vm.review.suit_id = $stateParams.id;
    Review
      .save(vm.review)
      .$promise
      .then((data) => {
        vm.suit.reviews.push(data);
        vm.review = '';
      });
  };
}
