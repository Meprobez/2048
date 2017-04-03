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

  function makingMove(key, field)
  {
    console.log("inGameManager");
    console.log(key);
    console.log(field);
    var step = direction(key);  
    var boundery = self.fieldSize;
     console.log(boundery);
    for(var i=0; i++; i<self.fieldSize*self.fieldSize)
   
      
  }

  function direction(key)
  {
      var directions = {'ArrowUp':-4,'ArrowDown':4,'ArrowLeft':-1,'ArrowRight':1};
      return directions[key];
  }
}