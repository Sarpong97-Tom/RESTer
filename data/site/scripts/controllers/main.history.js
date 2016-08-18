'use strict';

angular.module('app')
    .controller('HistoryCtrl', ['$scope', '$state', '$rester', '$variables', function ($scope, $state, $rester, $variables) {

        $state.current.data = {
            title: 'History'
        };

        $scope.initialCount = 25;
        $scope.historyEntries = [];

        $rester.getHistoryEntries(-$scope.initialCount).then(entries => {
            $scope.historyEntries = entries;
        });

        $scope.getCompiledRequestLine = function (entry) {
            let compiledRequest = entry.request;
            if (entry.request.variables.enabled) {
                compiledRequest = $variables.replace(entry.request, entry.request.variables.values);
            }

            return `${compiledRequest.method} ${compiledRequest.url}`;
        };

        $scope.loadAll = function () {
            $rester.getHistoryEntries().then(entries => {
                $scope.historyEntries = entries;
            });
        };

        $scope.openHistoryEntry = function (entry) {
            $state.go('main.request.existing.history', {
                id: entry.request.id,
                historyId: entry.id
            });
        };

        $scope.deleteHistoryEntry = function (entry) {
            $rester.deleteHistoryEntry(entry).then(() => {
                let index = $scope.historyEntries.indexOf(entry);
                $scope.historyEntries.splice(index, 1);
            });
        };

    }]);
