var purchase = function(dimType, dimNum){
  var pts = player.points;
  if(dimType === 0){
    var cost = player.normalDimensions[dimNum-1][1];
    if(pts.gte(cost)){
      pts = pts.sub(cost);
      cost = cost.mul(Decimal.pow(5, dimNum));
      player.normalDimensions[dimNum-1][2].add(1);
      player.points = pts;
      player.normalDimensions[dimNum-1][1] = cost;
    }
  }
};
