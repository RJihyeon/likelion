for (var i=1; i<=5; i++){
  for (var j=1;j<=5-i;j++){
    document.write("&nbsp");
  }
  for (var k =1; j <=i; k++){
    document.write("*");
  }
  document.write("<br>");
}