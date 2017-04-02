angular.module('2048')
.controller('appController', appController);

appController.$inject('gridService', 'gameManager');
function appController(gridService, gameManager)
{
	var self = this;
}