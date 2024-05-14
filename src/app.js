angular.module('myApp', [])
  .controller('UserReposController', ['$http', function($http) {
    var vm = this;
    vm.repos = [];
    vm.username = '';
    vm.profile = {}; // Object to store user's profile information

    vm.searchRepos = function() {
      // Fetch repositories
      $http.get('https://api.github.com/users/' + vm.username + '/repos')
        .then(function(response) {
          vm.repos = response.data;
        })
        .catch(function(error) {
          console.error('Error fetching repositories:', error);
        });
    
      // Fetch user profile
      $http.get('https://api.github.com/users/' + vm.username)
        .then(function(response) {
          vm.profile = response.data;
          vm.showProfile = true; // Set to true after successful data fetch
        })
        .catch(function(error) {
          console.error('Error fetching user profile:', error);
        });
    };
    
  }]);
