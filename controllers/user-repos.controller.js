angular.module('myApp', [])
  .controller('UserReposController', ['$http', function($http) {
    var vm = this;
    vm.repos = [];
    vm.username = '';

    vm.searchRepos = function() {
        console.log('Searching repositories for username:', vm.username);

      // Make sure username is provided
      if (vm.username) {
        // Construct the URL for fetching user repositories from GitHub API
        var apiUrl = 'https://api.github.com/users/' + vm.username + '/repos';

        // Make GET request to GitHub API
        $http.get(apiUrl)
          .then(function(response) {
            // If successful, assign the repositories to vm.repos
            vm.repos = response.data;
          })
          .catch(function(error) {
            // If error occurs, log the error to console
            console.error('Error fetching repositories:', error);
          });
      } else {
        // If username is not provided, display an error message or handle it as per your requirement
        console.error('Please enter a username');
      }
    };
  }]);
