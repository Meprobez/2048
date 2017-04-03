angular.module('2048')
.controller('appController', appController);

appController.$inject = ['$scope','gridService','gameManager'];
function appController($scope,gridService,gameManager)
{
	var self = this;
	self.$onInit = onInit;
	self.grid = [];
	self.fieldSize = 4;
	self.template = { url: 'main/app.html' };
	self.score = 0;
	self.best = 0;
	self.newGame = newGame;
	self.makingMove = makingMove;
	function onInit()
	{
		self.field = gridService.returnNewField();
		addEventListener('keydown', function(event)
		{
			event.preventDefault();
			console.log(event.key);
			console.log(self.field);
			gameManager.makingMove(event.key,self.field);
		})
	};
	
	function newGame()
	{
		if(self.score>self.best)
			self.best = self.score;
		self.score = 0;
		self.field =  gridService.returnNewField();
	}
	
	function makingMove($event)
	{
		
	}
}