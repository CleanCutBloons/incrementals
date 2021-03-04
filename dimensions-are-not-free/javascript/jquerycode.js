var jQuery = function(player){
  Decimal.toExpPos = 6;
  $("span.points").text(player.points.toString());
  $("span#nd1Amount").text(displayExp(player.normalDimensions[0][2]));
  $("span#nd2Amount").text(displayExp(player.normalDimensions[1][2]));
  $("span#nd3Amount").text(displayExp(player.normalDimensions[2][2]));
  $("span#nd4Amount").text(displayExp(player.normalDimensions[3][2]));
  $("span#nd1Cost").text(displayExp(player.normalDimensions[0][1]));
  $("span#nd2Cost").text(displayExp(player.normalDimensions[1][1]));
  $("span#nd3Cost").text(displayExp(player.normalDimensions[2][1]));
  $("span#nd4Cost").text(displayExp(player.normalDimensions[3][1]));
};
