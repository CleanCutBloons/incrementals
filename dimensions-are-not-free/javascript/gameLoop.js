var setup = function(){
  frameRate(20);
};
var draw = function(){
  var points = player.points;
  var normalDimensions = player.normalDimensions;
  points += 0.05;
  jQuery();
  player.points = points;
  player.normalDimensions = player.normalDimensions;
};
