angular.module('2048')
.factory('gridService', gridService)


function gridService() 
{
  var self = this;

  self.grid   = []; //x4
  self.tiles  = []; //x4
  
  var service = {
    createGrid:createGrid,
    returnGrid:returnGrid
  };   
  return service;

function createGrid()
{
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
		let cell = angular.copy(self.cell)
		self.grid.push(cell);
	};
}

function cellGenerator(grid,movesCounter)
{
	if(movesCounter)
	{

	}
	else
	{
		let num1 = Math.random()
	}

}
function returnGrid()
{
	createGrid();
    return self.grid;
}
}