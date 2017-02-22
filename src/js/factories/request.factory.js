angular
  .module('rent-a-suit')
  .factory('Request', requestFactory);

requestFactory.$inject = ['API', '$resource'];
function requestFactory(API, $resource){
  return $resource(`${API}/requests/:id`, { id: '@_id'},
    {
      'save': {method: 'POST'},
      'update': {method: 'PUT'},
      'delete': {method: 'DELETE'}
    }
  );
}
