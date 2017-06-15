angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
        return $http.get('localhost:3000/api/login'), user
    };

    this.getFriends = function() {

    };
  
});
