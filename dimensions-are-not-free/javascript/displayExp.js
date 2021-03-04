var displayExp = function(decimal){
  if(decimal.e > 5.99){
    return decimal.dividedBy(new Decimal("1e" + decimal.e)).toFixed(5) + "e" + decimal.e;
  } else {
    return decimal.toFixed(2);
  }
};
