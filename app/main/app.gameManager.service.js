angular.module('2048')
.factory('gameManager', gameManager);

gameManager.$inject = ['gridService'];
function gameManager(gridService)
{
  var self = this;
  self.fieldSize = 4;
  var service = {
    makingMove:makingMove
  };
  return service;

  function makingMove(key, grid)
  {
    console.log("inGameManager: ", key);
    var move = direction(key);  
    var boundaries = defineBounderies(move), boundCount = 0,index,boundary;
    for(var i = move.start; i!=move.end; i+=move.inc)
    {
      boundary = boundaries[boundCount];
      index = boundary;
      for(var j=1;j<=4;j++)
      {
         if(grid[index].number)
         {
           let dir = index, step = -move.step;
           while(dir!==boundary)
           {
                if(grid[dir+step].number) //if there is number in next step
                {
                    if(grid[dir+step].number===grid[dir].number) //if there is number and they equal
                    {
                      grid[dir+step].number+=grid[dir].number;
                      grid[dir].number = null;
                      dir+=step;
                    }
                    else break; //numbers not equal, we stop moving
                }
                else //if no number, move current number to its place
                {
                    grid[dir+step].number = grid[dir].number;
                    grid[dir].number = null;
                    dir+=step;
                }
          
            }//while direction checking
         }//If number checking
         index+=move.step;
      }
      boundCount++;
    };
    gridService.saveGrid(grid);
    
    return grid;
  }

    function direction(key)
    {
      var directions = {
        'ArrowRight':{
          step:-1,
          start:4,
          end:0,
          inc:-1,
          size:4
        },
        'ArrowLeft':{
          step:1,
          start:1,
          end:5,
          inc:1,
          size:4
        },
        'ArrowUp':{
          step:4,
          start:1,
          end:5,
          inc:1,
          size:1
        },
        'ArrowDown':{
          step:-4,
          start:4,
          end:0,
          inc:-1,
          size:1
        }
      };
      return directions[key];
    }
    
    function defineBounderies(move)
    {
      var boundaries = [];
      for(var i=0;i<=3;i++)
          boundaries.push(move.start*move.start+i*move.inc*move.size);
      return boundaries;
    }
      
  
}