app.controller('treeController', ['$scope', treeController]);

function treeController($scope) {
  var vm = this;

  vm.treeData = {
    "name": "5Weight Customers",
    "children": [{
      "name": "Shea Homes Colorado",
      "children": [{
        "name": "BackCountry CO",
        "children": [{
          "name": "BackCountry CO",
          "children": [{
            "name": "Zillow Boost"
          }]
        },]
      }, {
        "name": "Stepping Stone CO",
        "children": [{
          "name": "Zillow Boost"
        }]
      }]
    },
    {
      "name": "Shea Homes Colorado",
      "children": [{
        "name": "BackCountry CO",
        "children": [{
          "name": "Zillow Boost"
        }]
      }, {
        "name": "Stepping Stone CO",
        "children": [{
          "name": "Zillow Boost"
        }]
      }]
    },
    {
      "name": "Shea Homes Colorado",
      "children": [{
        "name": "BackCountry CO",
        "children": [{
          "name": "Zillow Boost"
        }]
      }, {
        "name": "Stepping Stone CO",
        "children": [{
          "name": "Zillow Boost"
        }]
      }]
    },
    {
      "name": "Shea Homes Colorado",
      "children": [{
        "name": "BackCountry CO",
        "children": [{
          "name": "Zillow Boost"
        }]
      }, {
        "name": "Stepping Stone CO",
        "children": [{
          "name": "Zillow Boost"
        }]
      }]
    },
    {
      "name": "Shea Homes Colorado",
      "children": [{
        "name": "BackCountry CO",
        "children": [{
          "name": "Zillow Boost"
        }]
      }, {
        "name": "Stepping Stone CO",
        "children": [{
          "name": "Zillow Boost"
        }]
      }]
    }]
  };
}
