// make a basic calculator
var num1 = prompt("Please enter number 1");
var num2 = prompt("Please enter number 2");
num1 = parseFloat(num1); //将string转换成number，保留小数点的（parseInt去掉小数点）
num2 = parseFloat(num2);
document.write(num1 + num2);
