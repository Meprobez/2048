angular.module('2048')
.controller('appController', appController);

appController.$inject = ['gridService'];
function appController(gridService)
{
	var self = this;
	self.$onInit = onInit;

	function onInit()
	{
		self.grid = gridService.returnGrid();
		console.log(self.grid);
	};
	
}