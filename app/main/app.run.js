'use strict';
angular.module('2048')
.run(run);

run.$inject = ['$rootScope','$history','gridService','gameManager'];
function run($rootScope,$history,gridService,gameManager)
{
	$history.historyMaintain($rootScope);
}
