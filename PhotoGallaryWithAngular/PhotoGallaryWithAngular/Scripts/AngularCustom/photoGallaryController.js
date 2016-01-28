//Photo gallary controller
module.controller('photoGallaryController', function PostController($scope, PhotoGallaryService) {
    $scope.searchTag = '';
    $scope.IsLoading = false;
    $scope.GetAll = function () {
        $scope.IsLoading = true;
        if (!$scope.searchTag) {
            $scope.photos = PhotoGallaryService.load();
        } else {
            $scope.photos = PhotoGallaryService.load({ tags: $scope.searchTag });
        }
        $scope.IsLoading = false;
    };
    $scope.Search = function () {
        $scope.GetAll();
    }
    $scope.GetAll();

})