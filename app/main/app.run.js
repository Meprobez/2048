'use strict';
angular.module('2048')
.run(['$rootScope','$history',function($rootScope,$history)
{
	$history.historyMaintain($rootScope);
		
}])
