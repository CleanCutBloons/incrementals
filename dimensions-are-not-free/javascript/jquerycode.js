var jQuery = function(){
  Decimal.set({ toExpPos: 6 })
  $("span.points").text(points.toString());
  $("span#nd1Amount").text(normalDimensions[0][2]);
  $("span#nd2Amount").text(normalDimensions[1][2]);
  $("span#nd3Amount").text(normalDimensions[2][2]);
  $("span#nd4Amount").text(normalDimensions[3][2]);
  $("span#nd1Cost").text(normalDimensions[0][1].toString());
  $("span#nd2Cost").text(normalDimensions[1][1].toString());
  $("span#nd3Cost").text(normalDimensions[2][1].toString());
  $("span#nd4Cost").text(normalDimensions[3][1].toString());
};
