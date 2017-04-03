angular.module('2048')
.factory('gameManager', gameManager);

gameManager.$inject = ['gridService'];
function gameManager()
{
  var self = this;
  var service = {
    makingMove:makingMove
  };
  return service;

  function makingMove(key, field)
  {
    console.log("inGameManager");
    console.log(key);
    console.log(field);
  }
}