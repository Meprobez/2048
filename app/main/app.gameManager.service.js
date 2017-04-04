angular.module('2048')
.factory('gameManager', gameManager);

gameManager.$inject = ['gridService'];
function gameManager()
{
  var self = this;
  self.fieldSize = 4;
  var service = {
    makingMove:makingMove
  };
  return service;

  function makingMove(key, grid)
  {
    console.log("inGameManager");
    console.log(key);
    var move = direction(key);  
    var boundaries = defineBounderies(move), boundCount = 0,index;
    for(var i = move.start; i!=move.end; i+=move.inc)
    {
      index = boundaries[boundCount];
      for(var j=1;j<=4;j++)
      {
         console.log(grid[index]);
         index+=move.step;
         
      }
      boundCount++;
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
          step:-4,
          start:1,
          end:5,
          inc:1,
          size:1
        },
        'ArrowDown':{
          step:4,
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
      console.log(boundaries);
      return boundaries;
    }
      
  }
}