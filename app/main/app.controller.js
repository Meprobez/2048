angular.module('2048')
.controller('appController', appController);

//appController.$inject = ['gridService', 'gameManager'];
function appController()
{
	var self = this;
	self.$onInit = onInit;

	function onInit()
	{
		self.grid = [];
		self.cell = {
			x:0,
			y:0,
		number:null	
		};
		for(var i=0; i<4;i++)
			for(var j=0; j<4; j++)
			{
				self.cell.y = i;
				self.cell.x = j;
				self.grid.push(self.cell);
			};
		console.log(self.grid);
	};
	
}