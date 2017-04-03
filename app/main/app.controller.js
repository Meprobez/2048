angular.module('2048')
.controller('appController', appController);

appController.$inject = ['$scope','gridService'];
function appController($scope,gridService)
{
	var self = this;
	self.$onInit = onInit;
	self.grid = [];
	self.fieldSize = 4;
	self.template = { url: 'main/app.html' };
	self.score = 0;
	self.best = 0;
	self.newGame = newGame;
	self.createField = createField;

	function onInit()
	{
		self.grid = gridService.returnNewGrid();
		self.createField(self.grid);
		
	};
	function createField(grid)
	{
		self.field = [];
		for(var i=0;i<self.fieldSize;i++)
		{
			self.field[i] = [];
			for(var j=0; j<self.fieldSize;j++)
			{
				let step = i*self.fieldSize;
				console.log(step);
				self.field[i].push(grid[j+step]);
			}
		}
		console.log(self.field);
	}

	function newGame()
	{
		if(self.score>self.best)
			self.best = self.score;
		self.score = 0;
		self.grid = gridService.returnNewGrid();
		self.createField(self.grid);

	}
	
}