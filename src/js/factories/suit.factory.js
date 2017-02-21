angular
  .module('rent-a-suit')
  .factory('Suit', suitFactory);

suitFactory.$inject = ['API', '$resource'];
function suitFactory(API, $resource){
  return $resource(`${API}/suits/:id`, { id: '@_id'},
    {
      'update': { method: 'PUT' },
      'save': {method: 'POST'}
    }
  );
}
