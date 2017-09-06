angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.listings.forEach( (value, index) => {
      $scope.listings[index].searched = true
    });

    //Search bar functionality added
    $scope.search = () => {
      let searchInput = $scope.searchInput.toUpperCase();

      $scope.listings.forEach( (value, index) => {
        if(value.code.toUpperCase().indexOf(searchInput) != -1 ||
            value.name.toUpperCase().indexOf(searchInput) != -1) {
          $scope.listings[index].searched = true
        }
        else $scope.listings[index].searched = false;
      });
    }

    $scope.addListing = function() {
      let code = $scope.addCode;
      
      $scope.listings.push({
        "code" : $scope.addCode,
        "name" : $scope.addBuilding,
        "address" : $scope.addAddress,
        "searched" : true
      });
      
      alert(code + " was added to the bottom of your list!");
            
      $scope.addCode = '';
      $scope.addBuilding = '';
      $scope.addAddress = '';
    };

    $scope.deleteListing = function(index) {
      delete $scope.listings[index];
    };

    $scope.showDetails = function(index) {
      $scope.currentBuilding = $scope.listings[index].name;
      
        if(!$scope.listings[index].address) $scope.currentAddress = "None Available";
        else $scope.currentAddress = $scope.listings[index].address;
      
        if(!$scope.listings[index].coordinates) {
          $scope.currentLatitude = "None Available";
          $scope.currentLongitude = "None Available";
        }
        else {
          $scope.currentLatitude = $scope.listings[index].coordinates.latitude;
          $scope.currentLongitude = $scope.listings[index].coordinates.longitude;
        }
    };
  }
]);