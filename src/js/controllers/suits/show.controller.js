angular
  .module('rent-a-suit')
  .controller('SuitsShowCtrl', SuitsShowCtrl);

SuitsShowCtrl.$inject = ['Suit', 'Request', 'Review', '$stateParams'];
function SuitsShowCtrl(Suit, Request, Review, $stateParams){
  const vm = this;
  Suit
      .get($stateParams)
      .$promise
      .then(response => {
        vm.suit = response;
        console.log(response);
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

  vm.requestdelete = (requests) => {
    Request
      .delete({id: requests.id} )
      .$promise
      .then(() => {
        vm.suit.requests.splice(vm.suit.requests.indexOf(requests), 1);
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

  vm.reviewdelete = (reviews) => {
    Review
      .delete({id: reviews.id})
      .$promise
      .then(() => {
        vm.suit.reviews.splice(vm.suit.reviews.indexOf(reviews), 1);
      });
  };
}
