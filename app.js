//基礎編
//Q1 変数
let nickname = "ごっしー";
let age = 28;

console.log("私のニックネームは" + nickname + "です。年齢は" + age +"です。");

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log("私の好きな言語は" + languages[0] + "です。次は" + languages[1] + "勉強してみたいです。");

//Q3 オブジェクト
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
  };

console.log(user.age);

//Q4 配列 × オブジェクト
let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
  ];

  console.log(playerList[1].favorites[1]);

//Q5 四則演算
let sum = 0;
for(let i = 0; i<playerList.length; i++){
    sum += playerList[i].age;
}
console.log(sum/playerList.length);

//Q6 関数
function sayHello(){
    console.log("Hello");
}

let sayWorld = function() {return console.log("World ")};
sayHello();
sayWorld();

//Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function() {console.log("Hello!")};

user.sayHello();

//Q8 引数
let calc = {};
calc.add = function add(x, y) {console.log(x + y);}
calc.subtract = function subtract(x, y) {console.log(x - y);}
calc.multiply = function multiply(x, y) {console.log(x * y);}
calc.divide = function divide(x, y) {console.log(x / y);}

calc.add(3,4);
calc.subtract(15,5);
calc.multiply(7,7);
calc.divide(25,5);

//Q9 返り値
function remainder (x,y){
    return x%y;
}

console.log("5を3で割った余りは" + remainder(5,3) + "です。");

//Q10 スコープ
// function foo() {
//     let x = 1;
//   }
//   console.log(x);
//xをメソッド内で定義しているため、メソッドの外だとスコープ範囲外のため上記のconsole.logの参照ができないためエラーが出ます。
//問題を解決するにはメソッド外でxを定義する必要があります。

//応用編
//Q1 標準組み込みオブジェクト
console.log(Math.floor(Math.random() * 10));

//Q2 コールバック関数
setTimeout(function() {console.log("Hello World!")}, 3000);

//Q3 if
let num = 0;
if(num > 0){
    console.log("num is greater than 0");
}else if(num < 0){
    console.log("num is less than 0");
}else{
    console.log("num is 0");
}

//Q4 for
let numbers = [];
for(let i = 0;i < 100;i++){
    numbers[i] = i;
}
console.log(numbers);

//Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

function isEven(num){
    return num % 2 === 0;
}

function isNum(num){
    return typeof num === 'number';
}

for(let i = 0;i < mixed.length;i++){
    if(isNum(mixed[i]) == true && isEven(mixed[i]) == true){
        console.log("even");
    }else if(isNum(mixed[i]) == true && isEven(mixed[i]) == false){
        console.log("odd");
    }else{
        console.log("not number");
    }
}