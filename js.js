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


// 4-Array ... Object 阵列
var scores = [80, 60, 50, 70, 90];
var friends = ["Tom", "Lily", "Rob"];
var boolean = [true, false];
scores[0] = 100;//改写第零位成绩
document.wirte(scores[0]);
document.write(friends.length);


// 5-Function 函式
function hello(nam, age){
    //document.write("hello" + nam + "你今年" + age);
    return "hello" + nam + "你今年" + age;
}
hello();//对函式做呼叫
hello("Lily", "82");

function add(num1, num2){
    return num1 + num2;
    ducument.write("hello");//上面的return会覆盖这里的function
}
document.write (add(3, 9));


// 6-Object 物件（可以存放很多key 和 value）
var person = {
    name:"Bob",
    age:56,
    is_male:true,
    print_name:function(){
        document.write(this.name);
    }
};
person.print_name();//取得person这个object中的print_name key

var movie = {
    title:"刻在你心底的名字",
    maker:"氧气电影",
    duration:124,
    actors:[
        {
            name:"陈浩森",
            age:23,
            is_male:true,
        },
        {
            name:"增庆华",
            age:24,
            is_male:true,
        }
    ]
}
document.write(movie.actors[0].age);


//变数 variable
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

//if 判断
//1
var hungry = true
if(hungry){
    document.write("eat");
}
//2
var rainy = true
if(rainy){
    document.write("bus");
}
else{
    document.write("bike");
}
//3
var score = 100;
if(score==100){
    document.write("I'll give you 1000$");
}
else if(score>=80){
    document.write("I'll give you 500$");
}
else if(score>=60){
    document.write("I'll give you 100$");
}
else{
    document.write("you own me 300$");
};
//4 且的类型&&
var score = 100;
var rainy = true;
if(score==100 && rainy){
    document.write("I'll give you 1000$");
}
else{
    document.write("you own me 300$");
}
//5 或的类型 || (如果你考100或今天下雨，就给你1000)
var score = 100;
var rainy = true;
if(score==100 || rainy){
    document.write("I'll give you 1000$");
}
else{
    document.write("you own me 300$");
}
//6 或的类型 || (如果你考100或今天没有（！）下雨，就给你1000)
//!表示相反的意思
var score = 100;
var rainy = true;
if(score==100 || !rainy){
    document.write("I'll give you 1000$");
}
else{
    document.write("you own me 300$");
}

//if and function 练习
function max_num(num1, num2, num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    } 
    else if(num2>=num1 && num2>=num3){
        return num2;
    }
    else {
        return num3;
    }
}
document.write(max_num(2, 3, 5));


//while 回圈 （会帮助我们重复执行一段代码，直到判断为false(这里i++等于i+1s)
var i = 3;
while(i<=3){
    document.write(i);
    document.write("<br/>");
    i++;
}
//或者先执行再判断
do{
    document.write(i);
    document.write("<br/>");
    i++;
}while(i<=3);


//密码检验程式 (限制输入次数)if和while练习
var password = 123456;
var input;
var entry_count = 0;
var entry_limit = 3;
var entry_of_limit = false;//判断现在有没有超出输入的次数

while(password!=input && !out_of_limit){
    entry_count++;
    if(entry_count <= entry_limit){
        input = prompt("Please enter your password");
    }
    else{
        out_of_limit = true;
    }
}
if (out_of_limit){
    alert("out of entry limit times");
}
else{
    alert("log in successful!");
}

//for 回圈（和while一样，可以帮我们重复执行一段代码，直到条件判断为false为止；但for更简洁
var i = 0;
while(i<10){
    document.write(i);
    document.write("<br/>");
    i++;
}
//下面的for回圈等同于上面的while回圈（不一定是i也可以是q什么的
for(var i=0; i<10; i++){
    document.write(i);
    document.write("<br/>");
}

//制作一个问答程式
var questions = [
    {
        prompt:"What is the color of banana?\n(a)Red\n(b)green\n(c)yellow",
        answer:"c"
    },
    {
        prompt:"What is the color of straberry?\n(a)Red\n(b)green\n(c)yellow",
        answer:"a"
    },
    {
        prompt:"What is the color of kwid?\n(a)Red\n(b)green\n(c)yellow",
        answer:"b"
    },
]
var score = 0;
for (var i=0; i < questions.length; i++){
    var input = prompt (questions[i].prompt);
    if(input==questions[i].answer){
        score++;
        alert("Right answer!");
    }
    else{
        alert("Wrong answer!");
    }
}
alert("Right answer numbers:" + score + ".");

//二维阵列、巢状回圈 2D array, nested loop
var number = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9],
    [0]
]
document.write(number[0][0]);

for(var i = 0; i<4; i++){
    for(var j=0; j<3; j++){
        document.write("i:" + i + " ,j:" +j);
        document.write("<br/>");
    }
}
//使用nested loop取2D array中的每一个值
var number = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9],
    [0]
]

for (var i=0; i<number.length; i++){
    for (var j=0; j<number[i].length; j++){
        document.write(number[i][j]);
    }
    document.write("<br/>");
}

//class
class Phone {
    constructor(number, year, is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2021 - this.year;
    }
}
var phone1 = new Phone("123", 2020, false);
var phone2 = new Phone("456", 2090, false);
document.write(phone2.phone_age());

//如何取得html元素
var h1 = document.getElementById("header");
h1.innerText = "Goodbye world";
h1.style.backgroundColor = "red";
h1.style.color ="blue";
var link = document.getElementById("link");
link.href = "https://www.google.com/search?q=hello&source=hp&ei=1oFhY4j_NIiVkgWlhY6YDA&iflsig=AJiK0e8AAAAAY2GP5hiCqG4efXnsBdAX2kj54ybqc497&ved=0ahUKEwiIwsO76Y37AhWIiqQKHaWCA8MQ4dUDCAg&uact=5&oq=hello&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBENEDMgsILhCABBDHARCvATIICC4QgAQQ1AIyCAguEIAEENQCMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BMgUILhCABDIFCAAQgAQyBQgAEIAEOg4ILhCABBDHARDRAxDUAlCyC1iAEmDNE2gBcAB4AIABa4gBpQOSAQMzLjKYAQCgAQGwAQA&sclient=gws-wiz";

//event listener 事件监听器 （w3c js event list


