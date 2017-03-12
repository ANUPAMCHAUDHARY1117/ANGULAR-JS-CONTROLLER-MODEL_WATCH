app.controller('menuController', [
    '$scope',
    function($scope){
        $scope.model = {title: 'Our Menu'};

       
    $scope.changeMainDish = function (item) {
    $scope.model.mainDish = item;
    $scope.$watch('model.mainDish',function(newValue, oldValue){
        if(newValue == 'Cheese Pizza'){
            $scope.model.price= " $13.89";
        }
         else  if (newValue == 'Pepperoni Pizza'){
            $scope.model.price= " $10.89";
        }
       
    else if (newValue == 'Margherita  Pizza'){
            $scope.model.price= " $10.00";
        }

         else if (newValue == 'BBQ Chicken Pizza'){
            $scope.model.price= " $14.50";
        }

        else $scope.model.price = " $15.60" ;
    })
}
    }
])

