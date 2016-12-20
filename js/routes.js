app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../views/main.html',
    controller: 'mainController as mc',
    css: 'css/lineGraph.css'
  })
  .when('/clients', {
    templateUrl: '../views/tree.html',
    controller: 'treeController as tc',
    css: 'css/tree.css'
  });
});
