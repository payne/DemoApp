eventsApp.factory('eventData', function ($resource) {
    return {
        getEvent: function() {
            return $resource('data/event/:id', { id: '@id'}).get({id:1});
            return $http({method: 'GET', url: 'data/event/1.json'});
        }
    };
});