angular.module('2048')
.factory('gameManager', gameManager);

gameManager.$inject = ['gridService'];
function gameManager(gridService)
{
  var self = this;
  self.score = 0;
  self.best = 0;
  var service = {
    makingMove:makingMove,
    getScore:getScore,
    resetScore:resetScore
  };
  return service;

  function makingMove(key, grid)
  {
    console.log("inGameManager: ", key);
    var move = direction(key), diffrentField = false,win = false;  
    var boundaries = defineBounderies(move), boundCount = 0,index,boundary
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
                    if(grid[dir+step].number===grid[dir].number && grid[dir].merged!==true && grid[dir+step].merged!==true) //if there is number and they equal
                    {
                      grid[dir+step].number+=grid[dir].number;
                      grid[dir+step].merged = true;
                      if(grid[dir+step].number===2048)
                        win = true;
                      self.score += grid[dir+step].number;
                      grid[dir].number = null;
                      diffrentField = true;
                      dir+=step;
                    }
                    else break; //numbers not equal, we stop moving
                }
                else //if no number, move current number to its place
                {
                    grid[dir+step].number = grid[dir].number;
                    grid[dir].number = null;
                    diffrentField = true;
                    dir+=step;
                }
          
            }//while direction checking
         }//If number checking
         index+=move.step;
      }
      boundCount++;
    };
    if(diffrentField)
    {
      if(win)
      {
        gridService.saveGrid(true);
        return;
      }
      for(var c=1;c<=16;c++)
        grid[c].merged = false;
      grid = gridService.cellGenerator(grid,1);
    }
    else
    {
      let lose = true, win = false;
      for(var c=1;c<=16;c++)
        if(!grid[c].number)
          lose = false;
      if(lose)
      {
        gridService.saveGrid(null);
        return;
      }
    }
    gridService.saveGrid(grid);
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

    function getScore()
    {
      return self.score;
    }  

    function resetScore()
    {
      self.score = 0;
    }  
  
}