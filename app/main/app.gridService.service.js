angular.module('grid', [])
.service('gridService', function() {
  this.grid   = []; //x4
  this.tiles  = []; //x4
  // Size of the board
  this.size   = 4;
  // ...
});