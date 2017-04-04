angular.module('2048')
.controller('appController', appController);

appController.$inject = ['$scope','gridService','gameManager'];
function appController($scope,gridService,gameManager)
{
	var self = this;
	self.$onInit = onInit;
	self.$postLink = postLink;
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
	}

	function postLink()
	{
		addEventListener('keydown', function(event)
		{
		 event.preventDefault();
		 if(event.key=="ArrowUp"||event.key=="ArrowDown"||event.key=="ArrowLeft"||event.key=="ArrowRight")
		 {
			gameManager.makingMove(event.key,self.grid);
			self.grid = gridService.getGrid();
			self.createField(self.grid);
			$scope.$apply();
		};})
	}

	function newGame()
	{
		if(self.score>self.best)
			self.best = self.score;
		self.score = 0;
		self.grid =  gridService.returnNewGrid();
		self.createField(self.grid);
	}
	
	function createField(grid)
	{
	self.field = [];
	for(var i=1;i<=self.fieldSize;i++)
	{
		self.field[i] = [];
		for(var j=1; j<=self.fieldSize;j++)
		{
			let step = (i-1)*self.fieldSize;
			self.field[i].push(grid[j+step]);
		}
	}
	return self.field;
}
}