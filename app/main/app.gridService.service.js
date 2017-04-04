angular.module('2048')
.factory('gridService', gridService)


function gridService() 
{
  var self = this;
  self.fieldSize = 4;
  var service = {
  	returnNewGrid:returnNewGrid,
	saveGrid:saveGrid,
	getGrid:getGrid
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

	}
	else
	{
		let num1 = getRandomInt(1, 17);
		let num2 = getRandomInt(1, 17);
		while(num1===num2)
		{
			num2 = getRandomInt(1, 17);
		};
		grid[num1].number = 2;
		grid[num2].number = 2;
		console.log(grid);
	}

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
function getRandomInt(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

}