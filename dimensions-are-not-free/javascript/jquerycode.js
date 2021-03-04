var jQuery = function(){
  Decimal.set({ rounding: 7 })
  $("span.points").text(points.round());
  $("span#nd1Amount").text(normalDimensions[0][2]);
  $("span#nd2Amount").text(normalDimensions[1][2]);
  $("span#nd3Amount").text(normalDimensions[2][2]);
  $("span#nd4Amount").text(normalDimensions[3][2]);
};
