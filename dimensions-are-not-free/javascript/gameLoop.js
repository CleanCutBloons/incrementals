var setup = function(){
  frameRate(20);
};
var draw = function(){
  var points = player.points;
  var normalDimensions = player.normalDimensions;
  points.add(0.05);
  player.points = points;
  player.normalDimensions = player.normalDimensions;
  jQuery(player);
};
