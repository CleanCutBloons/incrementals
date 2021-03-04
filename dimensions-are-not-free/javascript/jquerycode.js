var jQuery = function(player){
  Decimal.toExpPos = 6;
  $("span.points").text(player.points.toString());
  $("span#nd1Amount").text(player.normalDimensions[0][2]);
  $("span#nd2Amount").text(player.normalDimensions[1][2]);
  $("span#nd3Amount").text(player.normalDimensions[2][2]);
  $("span#nd4Amount").text(player.normalDimensions[3][2]);
  $("span#nd1Cost").text(player.normalDimensions[0][1].toString());
  $("span#nd2Cost").text(player.normalDimensions[1][1].toString());
  $("span#nd3Cost").text(player.normalDimensions[2][1].toString());
  $("span#nd4Cost").text(player.normalDimensions[3][1].toString());
};
