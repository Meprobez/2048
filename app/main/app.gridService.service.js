angular.module('2048')
.factory('gridService', gridService)


function gridService() 
{
  var self = this;

  self.grid   = []; //x4
  self.tiles  = []; //x4
  
  var service = {
    createGrid:createGrid,
    returnNewGrid:returnNewGrid
  };   
  return service;

function createGrid()
{
  self.grid = [];
  self.cell = {
			x:0,
			y:0,
		    number:null	
		};
  var id = 0;
  for(var i=0; i<4;i++)
	for(var j=0; j<4; j++)
	{
		self.cell.id = id;
		self.cell.y = i;
		self.cell.x = j;
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
		let num1 = getRandomInt(0, 16);
		let num2 = getRandomInt(0, 16);
		while(num1===num2)
		{
			num2 = getRandomInt(0, 16);
		};
		grid[num1].number = 2;
		grid[num2].number = 2;
		console.log(grid);
	}

}
function returnNewGrid()
{
	createGrid();
	cellGenerator(self.grid,0)
    return self.grid;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
}