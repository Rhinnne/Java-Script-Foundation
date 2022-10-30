// alert ("hello world")
// prompt('how old are you?')

//variavle

// var VAR_NAME = VAR_VALUE

// var age = 30;

// console.log()
// console.error('this is a mistake')

// 1-number /Intger 0123456789 【number and number methods】
document.wirte(012345);
document.wirte(6+3*5/7-3);//加减乘除
var number = 6;
document.write(8%3);//取余数
document.write(Math.abs(number));//取绝对值
document.write(Math.max(2, 5, 7, 99));//取最大的数
document.write(Math.round(2.3));//四舍五入
document.write(Math.random());//0-1之间的随机数
document.write(Math.round(Math.random()*10));//0-10之间的随机数，再四舍五入


// 2-String "Hello world" 【String and String methods】
var phrase = "hello world" + "hahaha";
var text = "hello";
document.wirte(phrase.length);
document.wirte(phrase.toUpperCase());
document.wirte(phrase.toLowerCase());
document.wirte(phrase.charAt(0));
document.wirte(phrase.indexOf('h'));
document.wirte(phrase.substring(0,5));

// 3-Boolean ... true or false

// 4-Object

// 5-Array ... Object

// 6-Function

//变数
//只能是英文大小写或是数字或是$或是_的组合
//开头不能是数字
var my_name = "Lily";

var userAge = prompt('How old are you?');
console.log (userAge)


if(userAge > 18){
    console.log("you can enter")
} else {
    console.log('get out')
}

