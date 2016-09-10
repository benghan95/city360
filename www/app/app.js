angular.module("city360App", ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when("/projects", {
        templateUrl: "project.html",
        controller: "ListProjectsController",
        // resolve: {

        // }
      })
      .otherwise({
        redirectTo: "/"
      })
  })
  .service("Projects", function($http){
    this.getProjects = function(){
      return $http.get("/projects").
        then(function(response){
          return response;
        }, function(response){
          alert("Error finding projects!");
        });
    }
    this.getProject = function(projectId) {
      var url = "/projects/" + projectId;
      return $http.get(url).
        then(function(response) {
          return response;
        }, function(response) {
          alert("Error finding this contact.");
        });
    }
  })
  .controller("ListProjectsController", function(projects, $scope){
    $scope.projects = projects.data;
  })

angular.module("multipleSelectModule", [
  'multipleSelect'
  ]);