angular.module('2048')
.factory('gridService', gridService)


function gridService() 
{
  var self = this;
  self.fieldSize = 4;
  var service = {
  	returnNewGrid:returnNewGrid,
	saveGrid:saveGrid,
	getGrid:getGrid,
	cellGenerator:cellGenerator
  };   
  return service;

function createGrid()
{
  self.grid = [];
  self.grid.push('Head');
  self.cell = {
			number:null	
		};
  var id = 1;
  for(var i=1; i<=4;i++)
	for(var j=1; j<=4; j++)
	{
		self.cell.id = id;
		let cell = angular.copy(self.cell)
		self.grid.push(cell);
		id++;
	};
}

function cellGenerator(grid,movesCounter)
{
	if(movesCounter)
	{
		let num = getRandomIntInclusive(1, 16);
		while(grid[num].number)
		{
			num = getRandomIntInclusive(1, 16);
		};
		grid[num].number = 2;
	}
	else
	{
		let num1 = getRandomIntInclusive(1, 16);
		let num2 = getRandomIntInclusive(1, 16);
		while(num1===num2)
		{
			num2 = getRandomIntInclusive(1, 16);
		};
		grid[num1].number = 2;
		grid[num2].number = 2;
	}
	return grid;
}

function returnNewGrid()
{
	createGrid();
	cellGenerator(self.grid,0);
    
	return self.grid;
}

function saveGrid(grid)
{
	self.grid = grid;
}

function getGrid()
{
	return self.grid;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

}