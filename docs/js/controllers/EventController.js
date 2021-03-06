'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) {

        //$scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color: 'red'};
        // $scope.event = eventData.getEvent();
        $scope.event = eventData.getEvent()
            .$promise
            .then( function(event) { $scope.event = event; console.log(event); })
            .catch(function(response) { console.log(response); });

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);