angular.module('game', [])
.service('gameManager', function() {
  // Create a new game
  this.newGame = function() {};
  // Handle the move action
  this.move = function() {};
  // Update the score
  this.updateScore = function(newScore) {};
  // Are there moves left?
  this.movesAvailable = function() {
    return gridService.anyCellsAvailable() || 
            gridService.tileMatchesAvailable();
  };
});